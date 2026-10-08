package sims.rest;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import sims.dto.user.UserResponse;

@RestController 
@RequestMapping("/api/user")
@CrossOrigin("*")
public class UserRestController {

    @GetMapping("/me")
    public UserResponse getCurrentUser(Authentication authentication) {
        String username = authentication.getName();
        
        return new UserResponse(username);
    }
}
