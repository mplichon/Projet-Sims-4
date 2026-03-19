package sims.rest;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import sims.dto.aspiration.ReponseListeGestionAspirationDTO;
import sims.mapper.AspirationMapper;
import sims.service.AspirationService;

@RestController
@RequestMapping("/api/aspiration")
@CrossOrigin("*")
public class AspirationRestController {
    private static final Logger log = LoggerFactory.getLogger(AspirationRestController.class);

    @Autowired
    AspirationService service;

    @Autowired
    AspirationMapper mapper;

    @GetMapping("/gestion")
    public List<ReponseListeGestionAspirationDTO> getAllAspirationGestion() {
        log.info("GET /api/aspiration/gestion - getAllAspirationGestion() called");
        return service.getAll()
            .stream()
            .map(mapper::toReponseListeGestionAspirationDTO)
            .toList();
    }
}
