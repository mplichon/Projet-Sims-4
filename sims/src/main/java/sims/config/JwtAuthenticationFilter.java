package sims.config;

import java.io.IOException;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import sims.service.TokenRevocationService;

@Component 
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;
    private final TokenRevocationService tokenRevocationService;

    public JwtAuthenticationFilter(JwtService jwtService, UserDetailsService userDetailsService, TokenRevocationService tokenRevocationService) {
        this.jwtService = jwtService;
        this.userDetailsService = userDetailsService;
        this.tokenRevocationService = tokenRevocationService;
    }

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain) throws ServletException, IOException {

        String authHeader = request.getHeader("Authorization");

        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }

        String token = authHeader.substring(7);
        Claims claims;

        try {
            claims = jwtService.parseAndValidate(token);

            // Un token doit avoir un identifiant et une expiration.
            if (claims.getId() == null || claims.getExpiration() == null) {
                response.sendError(
                    HttpServletResponse.SC_UNAUTHORIZED,
                    "Token invalide"
                );
                return;
            }
        } catch (JwtException | IllegalArgumentException e) {
            SecurityContextHolder.clearContext();

            response.sendError(
                HttpServletResponse.SC_UNAUTHORIZED,
                "Token invalide ou expiré"
            );
            return;
        }

        // Vérifier si le token a été révoqué à la déconnexion.
        if (tokenRevocationService.isRevoked(claims.getId())) {
            SecurityContextHolder.clearContext();

            response.sendError(
                HttpServletResponse.SC_UNAUTHORIZED,
                "Token révoqué"
            );
            return;
        }

        String username = claims.getSubject();

        if (username == null || username.isBlank()) {
            response.sendError(
                HttpServletResponse.SC_UNAUTHORIZED,
                "Token invalide"
            );
            return;
        }

        if (SecurityContextHolder.getContext().getAuthentication() == null) {
            try {
                UserDetails userDetails =
                    userDetailsService.loadUserByUsername(username);

                UsernamePasswordAuthenticationToken authentication =
                    new UsernamePasswordAuthenticationToken(
                        userDetails,
                        null,
                        userDetails.getAuthorities()
                    );

                SecurityContextHolder.getContext()
                    .setAuthentication(authentication);

            } catch (UsernameNotFoundException e) {
                SecurityContextHolder.clearContext();

                response.sendError(
                    HttpServletResponse.SC_UNAUTHORIZED,
                    "Utilisateur introuvable"
                );
                return;
            }
        }

        filterChain.doFilter(request, response);
    }
}
