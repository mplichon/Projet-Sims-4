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

import sims.dto.carriere.CarriereGestionDTO;
import sims.dto.carriere.ReponseGestionCarriereDTO;
import sims.dto.carriere.TypeCarriereDTO;
import sims.mapper.CarriereMapper;
import sims.model.Carriere;
import sims.service.CarriereService;

@RestController
@RequestMapping("/api/admin/carriere")
@CrossOrigin("*")
public class CarriereRestController {
    private static final Logger log = LoggerFactory.getLogger(CarriereRestController.class);

    @Autowired
    CarriereService service;

    @Autowired
    CarriereMapper mapper;

    @GetMapping("/selection/types")
    public List<TypeCarriereDTO> getAllTypeCarriereSelection() {
        log.info("GET /api/carriere/selection/types - getAllTypeCarriereSelection() called");
        return service.getAllTypeCarriere()
            .stream()
            .map(mapper::toTypeCarriereDTO)
            .toList();
    }

    @GetMapping("/gestion")
    public List<CarriereGestionDTO> getAllCarriereGestion() {
        log.info("GET /api/carriere/gestion - getAllCarriereGestion() called");
        return service.getAll()
            .stream()
            .map(mapper::toCarriereGestionDTO)
            .toList();
    }

    @GetMapping("/gestion/{id}")
    public ReponseGestionCarriereDTO getCarriereById(@PathVariable Integer id) {
        log.info("GET /api/carriere/gestion/{} - getCarriereById() called", id);
        return mapper.toReponseGestionCarriereDTO(service.getById(id));
    }

    @PostMapping("/gestion")
	public CarriereGestionDTO addCarriere(@RequestBody CarriereGestionDTO requeteCarriere) {
        log.info("POST /api/carriere/gestion - addCarriere() called");
        Carriere carriere = mapper.toCarriere(requeteCarriere);

        Carriere carriereCreee = service.create(carriere);

        return mapper.toCarriereGestionDTO(carriereCreee);
	}
    
    @PutMapping("/gestion/{id}")
	public CarriereGestionDTO updateCarriere(@PathVariable Integer id, @RequestBody CarriereGestionDTO requeteCarriere) {
        log.info("PUT /api/carriere/gestion/{} - updateCarriere() called", id);
        Carriere carriere = mapper.toCarriere(requeteCarriere);
        carriere.setId(id);

        Carriere carriereModifiee = service.update(carriere);

        return mapper.toCarriereGestionDTO(carriereModifiee);
	}

    @DeleteMapping("/gestion/{id}")
	public void deleteCarriere(@PathVariable Integer id) {
		log.info("DELETE /api/carriere/gestion/{} - deleteCarriere() called", id);
        service.deleteById(id);
	}
}
