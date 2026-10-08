package sims.dao;

import java.time.Instant;

import org.springframework.data.jpa.repository.JpaRepository;

import sims.model.user.RevokedToken;

public interface IDAORevokedToken extends JpaRepository<RevokedToken, String> {

    boolean existsByTokenId(String tokenId);

    void deleteByExpiresAtBefore(Instant now);
}
