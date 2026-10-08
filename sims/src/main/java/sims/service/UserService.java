package sims.service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import sims.dao.IDAOUser;
import sims.model.user.User;

@Service
public class UserService implements UserDetailsService {

    private final IDAOUser daoUser;

    public UserService(IDAOUser daoUser) {
        this.daoUser = daoUser;
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
}
