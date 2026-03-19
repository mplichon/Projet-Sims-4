package sims.rest;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import sims.dto.carriere.ReponseListeGestionCarriereDTO;
import sims.mapper.CarriereMapper;
import sims.service.CarriereService;

@RestController
@RequestMapping("/api/carriere")
@CrossOrigin("*")
public class CarriereRestController {
    private static final Logger log = LoggerFactory.getLogger(CarriereRestController.class);

    @Autowired
    CarriereService service;

    @Autowired
    CarriereMapper mapper;

    @GetMapping("/gestion")
    public List<ReponseListeGestionCarriereDTO> getAllCarriereGestion() {
        log.info("GET /api/carriere/gestion - getAllCarriereGestion() called");
        return service.getAll()
            .stream()
            .map(mapper::toReponseListeGestionCarriereDTO)
            .toList();
    }
}
