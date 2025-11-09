package sims.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "index";
    }
    
    @GetMapping("/login")
    public String connexion() {
        return "login";
    }
    
    @PostMapping("/login")
    public String tryConnexion() {
        return "redirect:/";
    }
}
