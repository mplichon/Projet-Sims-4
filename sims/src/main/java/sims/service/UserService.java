package sims.service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import sims.dao.IDAOUser;
import sims.dto.user.RegisterRequest;
import sims.model.user.Role;
import sims.model.user.User;

@Service
public class UserService implements UserDetailsService {

    private final IDAOUser daoUser;
    private final PasswordEncoder passwordEncoder;

    public UserService(IDAOUser daoUser, PasswordEncoder passwordEncoder) {
        this.daoUser = daoUser;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        User user = daoUser.findByUsername(username)
                .orElseThrow(() ->
                    new UsernameNotFoundException("Utilisateur introuvable"));

        return org.springframework.security.core.userdetails.User
                .withUsername(user.getUsername())
                .password(user.getPassword())
                .roles(user.getRole().name())
                .build();
    }

    @Transactional 
    public void register(RegisterRequest request) {
        String username = request.username().trim();

        if (daoUser.existsByUsername(username)) {
            throw new IllegalArgumentException(
                "Ce nom d'utilisateur est déjà utilisé."
            );
        }

        User user = new User();
        user.setUsername(username);
        user.setPassword(
            passwordEncoder.encode(request.password())
        );
        user.setRole(Role.USER);

        daoUser.save(user);
    }
}
