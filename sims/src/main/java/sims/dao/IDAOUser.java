package sims.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import sims.model.user.User;

public interface IDAOUser extends JpaRepository<User, Integer> {

    Optional<User> findByUsername(String username);
}
