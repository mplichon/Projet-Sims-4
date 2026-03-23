package sims.rest;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import sims.dto.CategorieSimDTO;
import sims.mapper.SimMapper;
import sims.service.SimService;

@RestController
@RequestMapping("/api/sim")
@CrossOrigin("*")
public class SimRestController {
    private static final Logger log = LoggerFactory.getLogger(SimRestController.class);

    @Autowired
    SimService service;

    @Autowired
    SimMapper mapper;

    @GetMapping("/gestion/categories")
    public List<CategorieSimDTO> getAllCategorieSimGestion() {
        log.info("GET /api/dlc/gestion/types - getAllCategorieSimGestion() called");
        return service.getAllCategorieSim()
            .stream()
            .map(mapper::toCategorieSimDTO)
            .toList();
    }
}
