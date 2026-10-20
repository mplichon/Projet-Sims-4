package sims.rest;

import java.util.Map;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.Claims;
import jakarta.validation.Valid;
import sims.config.JwtService;
import sims.dto.user.LoginRequest;
import sims.dto.user.LoginResponse;
import sims.dto.user.RegisterRequest;
import sims.service.UserService;
import sims.service.TokenRevocationService;

@RestController 
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class AuthRestController {

    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final UserService userService;
    private final TokenRevocationService tokenRevocationService;

    public AuthRestController(AuthenticationManager authenticationManager, JwtService jwtService, UserService userService, TokenRevocationService tokenRevocationService) {
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
        this.userService = userService;
        this.tokenRevocationService = tokenRevocationService;
    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                request.username(),
                request.password()
            )
        );

        UserDetails user = userService.loadUserByUsername(request.username());

        String token = jwtService.generateToken(user);

        return new LoginResponse(token);
    }

    @PostMapping("/logout")
    public ResponseEntity<Void> logout(@RequestHeader(value = HttpHeaders.AUTHORIZATION, required = false) String authorization) {

        if (authorization == null ||
                !authorization.startsWith("Bearer ")) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        String token = authorization.substring(7);

        // Cette méthode doit vérifier la signature et l'expiration
        // avant de retourner les claims.
        Claims claims = jwtService.parseAndValidate(token);

        tokenRevocationService.revoke(
            claims.getId(),
            claims.getExpiration().toInstant()
        );

        return ResponseEntity.noContent().build();
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(
        @Valid @RequestBody RegisterRequest request
    ) {
        try {
            userService.register(request);

            return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(Map.of(
                    "message",
                    "Compte créé avec succès."
                ));

        } catch (IllegalArgumentException e) {
            return ResponseEntity
                .badRequest()
                .body(Map.of("message", e.getMessage()));
        }
    }
}
