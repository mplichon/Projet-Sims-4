package sims.service;

import java.time.Instant;

import org.springframework.stereotype.Service;

import sims.dao.IDAORevokedToken;
import sims.model.user.RevokedToken;

@Service 
public class TokenRevocationService {

    private final IDAORevokedToken daoRevokedToken;

    public TokenRevocationService(IDAORevokedToken daoRevokedToken) {
        this.daoRevokedToken = daoRevokedToken;
    }

    public void revoke(String tokenId, Instant expiresAt) {
        if (tokenId == null || expiresAt == null) {
            throw new IllegalArgumentException("Token invalide");
        }

        if (!daoRevokedToken.existsByTokenId(tokenId)) {
            daoRevokedToken.save(new RevokedToken(tokenId, expiresAt));
        }
    }

    public boolean isRevoked(String tokenId) {
        return tokenId == null || daoRevokedToken.existsByTokenId(tokenId);
    }
}
