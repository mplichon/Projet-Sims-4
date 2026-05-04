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

import sims.dto.aspiration.AspirationLegerDTO;
import sims.dto.aspiration.ReponseCreationAspirationDTO;
import sims.dto.aspiration.ReponseGestionAspirationDTO;
import sims.dto.aspiration.ReponseListeGestionAspirationDTO;
import sims.dto.aspiration.ReponseModificationAspirationDTO;
import sims.dto.aspiration.RequeteCreationAspirationDTO;
import sims.dto.aspiration.RequeteModificationAspirationDTO;
import sims.dto.aspiration.TypeAspirationDTO;
import sims.mapper.AspirationMapper;
import sims.model.Aspiration;
import sims.model.TraitAspiration;
import sims.service.AspirationService;
import sims.service.TraitDeCaractereService;

@RestController
@RequestMapping("/api/aspiration")
@CrossOrigin("*")
public class AspirationRestController {
    private static final Logger log = LoggerFactory.getLogger(AspirationRestController.class);

    @Autowired
    AspirationService service;

    @Autowired
    TraitDeCaractereService traitService;

    @Autowired
    AspirationMapper mapper;

    @GetMapping("/selection/types")
    public List<TypeAspirationDTO> getAllTypeAspirationSelection() {
        log.info("GET /api/aspiration/selection/types - getAllTypeAspirationSelection() called");
        return service.getAllTypeAspiration()
            .stream()
            .map(mapper::toTypeAspirationDTO)
            .toList();
    }

    @GetMapping("/gestion")
    public List<ReponseListeGestionAspirationDTO> getAllAspirationGestion() {
        log.info("GET /api/aspiration/gestion - getAllAspirationGestion() called");
        return service.getAllOrderByNomAsc()
            .stream()
            .map(mapper::toReponseListeGestionAspirationDTO)
            .toList();
    }

    @GetMapping("/gestion/{id}")
    public ReponseGestionAspirationDTO getAspirationById(@PathVariable Integer id) {
        log.info("GET /api/aspiration/gestion/{} - getAspirationById() called", id);
        return mapper.toReponseGestionAspirationDTO(service.getById(id));
    }

    @GetMapping("/selection")
    public List<AspirationLegerDTO> getAllAspirationSelection() {
        log.info("GET /api/aspiration/selection - getAllAspirationSelection() called");
        return service.getAllOrderByNomAsc()
            .stream()
            .map(mapper::toAspirationLegerDTO)
            .toList();
    }

    @PostMapping("/gestion")
	public ReponseCreationAspirationDTO addAspiration(@RequestBody RequeteCreationAspirationDTO requeteAspiration) {
        log.info("POST /api/aspiration/gestion - addAspiration() called");
        Aspiration aspiration = mapper.toAspiration(requeteAspiration);

        Aspiration aspirationCreee = service.create(aspiration);

        return mapper.toReponseCreationAspirationDTO(aspirationCreee);
	}
    
    @PutMapping("/gestion/{id}")
	public ReponseModificationAspirationDTO updateAspiration(@PathVariable Integer id, @RequestBody RequeteModificationAspirationDTO requeteAspiration) {
        log.info("PUT /api/aspiration/gestion/{} - updateAspiration() called", id);
        Aspiration aspiration = mapper.toAspiration(requeteAspiration);
        aspiration.setId(id);

        Aspiration aspirationModifiee = service.update(aspiration);

        return mapper.toReponseModificationAspirationDTO(aspirationModifiee);
	}

    @DeleteMapping("/gestion/{id}")
	public void deleteAspiration(@PathVariable Integer id) {
		log.info("DELETE /api/aspiration/gestion/{} - deleteAspiration() called", id);
        TraitAspiration trait = service.getById(id).getTrait();

        if (trait != null) {
            TraitAspiration traitAspiration = traitService.getTraitAspirationById(trait.getId());
            traitAspiration.setAspiration(null);
            traitService.update(traitAspiration);
        }

		service.deleteById(id);
	}
}
