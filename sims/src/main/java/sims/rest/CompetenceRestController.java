package sims.rest;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import sims.dto.competence.ReponseListeGestionCompetenceDTO;
import sims.dto.competence.ReponseCreationCompetenceDTO;
import sims.dto.competence.ReponseGestionCompetenceDTO;
import sims.dto.competence.ReponseModificationCompetenceDTO;
import sims.dto.competence.RequeteCreationCompetenceDTO;
import sims.dto.competence.RequeteModificationCompetenceDTO;
import sims.mapper.CompetenceMapper;
import sims.model.Competence;
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
        return service.getAllOrderByNomAsc()
            .stream()
            .map(mapper::toReponseListeGestionCompetenceDTO)
            .toList();
    }

    @GetMapping("/gestion/{id}")
    public ReponseGestionCompetenceDTO getCompetenceById(@PathVariable Integer id) {
        log.info("GET /api/competence/gestion/{} - getCompetenceById() called", id);
        return mapper.toReponseGestionCompetenceDTO(service.getById(id));
    }

    @PostMapping("/gestion")
	public ReponseCreationCompetenceDTO addCompetence(@RequestBody RequeteCreationCompetenceDTO requeteCompetence) {
        log.info("POST /api/competence/gestion - addCompetence() called");
        Competence competence = mapper.toCompetence(requeteCompetence);

        Competence competenceCree = service.create(competence);

        return mapper.toReponseCreationCompetenceDTO(competenceCree);
	}
    
    @PutMapping("/gestion/{id}")
	public ReponseModificationCompetenceDTO updateCompetence(@PathVariable Integer id, @RequestBody RequeteModificationCompetenceDTO requeteCompetence) {
        log.info("PUT /api/competence/gestion/{} - updateCompetence() called, id");
        Competence competence = mapper.toCompetence(requeteCompetence);
        competence.setId(id);

        Competence competenceModifie = service.update(competence);

        return mapper.toReponseModificationCompetenceDTO(competenceModifie);
	}

    @DeleteMapping("/gestion/{id}")
	public void deleteCompetence(@PathVariable Integer id) {
		log.info("DELETE /api/joueur/{} - deleteCompetence() called", id);
		service.deleteById(id);
	}
}
