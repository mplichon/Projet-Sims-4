package sims.rest;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import sims.dto.competence.ReponseListeGestionCompetenceDTO;
import sims.mapper.CompetenceMapper;
import sims.service.CompetenceService;

@RestController
@RequestMapping("/api/competence")
@CrossOrigin("*")
public class CompetenceRestController {
    private static final Logger log = LoggerFactory.getLogger(CompetenceRestController.class);

    @Autowired
    CompetenceService service;

    @Autowired
    CompetenceMapper mapper;

    @GetMapping("/gestion")
    public List<ReponseListeGestionCompetenceDTO> getAllCompetenceGestion() {
        log.info("GET /api/competence/gestion - getAllCompetenceGestion() called");
        return service.getAll()
            .stream()
            .map(mapper::toReponseListeGestionCompetenceDTO)
            .toList();
    }
}
