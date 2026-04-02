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

import sims.dto.trait.ReponseCreationTraitDTO;
import sims.dto.trait.ReponseListeGestionTraitDTO;
import sims.dto.trait.ReponseModificationTraitDTO;
import sims.dto.trait.RequeteCreationTraitDTO;
import sims.dto.trait.RequeteModificationTraitDTO;
import sims.dto.trait.TypeTraitDTO;
import sims.manager.TraitManager;
import sims.mapper.TraitMapper;
import sims.service.TraitDeCaractereService;

@RestController
@RequestMapping("/api/trait")
@CrossOrigin("*")
public class TraitRestController {
    private static final Logger log = LoggerFactory.getLogger(TraitRestController.class);

    @Autowired
    TraitDeCaractereService service;

    @Autowired
    TraitMapper mapper;

    private final List<TraitManager> managers;

	public TraitRestController(List<TraitManager> managers) {
		this.managers = managers;
	}

    @GetMapping("/gestion/types")
    public List<TypeTraitDTO> getAllTypeTraitGestion() {
        log.info("GET /api/trait/gestion/types - getAllTypeTraitGestion() called");
        return service.getAllTypeTrait()
            .stream()
            .map(mapper::toTypeTraitDTO)
            .toList();
    }

    @GetMapping("/gestion")
    public List<ReponseListeGestionTraitDTO> getAllTraitGestion() {
        log.info("GET /api/trait/gestion - getAllTraitGestion() called");
        return service.getAllOrderByNomAsc()
            .stream()
            .map(mapper::toReponseListeGestionTraitDTO)
            .toList();
    }

    @GetMapping("/gestion/{id}")
    public ReponseModificationTraitDTO getTraitById(@PathVariable Integer id) {
        log.info("GET /api/trait/gestion/{} - getTraitById() called", id);
        ReponseModificationTraitDTO trait = mapper.toReponseModificationTraitDTO(service.getById(id));

        return managers.stream()
            .filter(manager -> manager.canManage(trait.getType()))
            .findFirst()
            .orElseThrow(() -> new IllegalArgumentException("Aucun manager trouvé pour le type : " + trait.getType().getCode()))
            .getTraitById(id);
    }

    @PostMapping("/gestion")
	public ReponseCreationTraitDTO addTrait(@RequestBody RequeteCreationTraitDTO requeteTrait) {
        log.info("POST /api/trait/gestion - addTrait() called");
        return managers.stream()
            .filter(manager -> manager.canManage(requeteTrait.getType()))
            .findFirst()
            .orElseThrow(() -> new IllegalArgumentException("Aucun manager trouvé pour le type : " + requeteTrait.getType().getCode()))
            .addTrait(requeteTrait);
	}

    @PutMapping("/gestion/{id}")
    public ReponseModificationTraitDTO updateTrait(@PathVariable Integer id, @RequestBody RequeteModificationTraitDTO requeteTrait) {
        log.info("POST /api/trait/gestion/{} - updateTrait() called", id);
        return managers.stream()
            .filter(manager -> manager.canManage(requeteTrait.getType()))
            .findFirst()
            .orElseThrow(() -> new IllegalArgumentException("Aucun manager trouvé pour le type : " + requeteTrait.getType().getCode()))
            .updateTrait(id, requeteTrait);
	}

    @DeleteMapping("/gestion/{id}")
	public void deleteTrait(@PathVariable Integer id) {
		log.info("DELETE /api/trait/gestion/{} - deleteTrait() called", id);
		service.deleteById(id);
	}
}
