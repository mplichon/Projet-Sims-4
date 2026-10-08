package sims.config;

import java.util.Date;
import java.util.UUID;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Service 
public class JwtService {

    private final SecretKey key;
    private final Integer expirationTime;

    public JwtService(@Value("${app.jwt.secret}") String secret, @Value("${app.jwt.expiration-ms}") Integer expirationTime) {
        this.key = Keys.hmacShaKeyFor(
            Decoders.BASE64.decode(secret)
        );
        this.expirationTime = expirationTime;
    }

    public String generateToken(UserDetails userDetails) {
        return Jwts.builder()
                .subject(userDetails.getUsername())
                .id(UUID.randomUUID().toString())
                .issuedAt(new Date())
                .expiration(
                    new Date(System.currentTimeMillis() + expirationTime)
                )
                .signWith(getKey())
                .compact();
    }

    public Claims parseAndValidate(String token) {
    return Jwts.parser()
        .verifyWith(getKey())
        .build()
        .parseSignedClaims(token)
        .getPayload();
}

    private SecretKey getKey() {
        return key;
    }
}
