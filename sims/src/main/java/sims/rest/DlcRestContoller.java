package sims.rest;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import sims.dto.dlc.ReponseListeGestionDlcDTO;
import sims.mapper.DlcMapper;
import sims.service.DlcService;

@RestController
@RequestMapping("/api/dlc")
@CrossOrigin("*")
public class DlcRestContoller {
    private static final Logger log = LoggerFactory.getLogger(DlcRestContoller.class);

    @Autowired
    DlcService service;

    @Autowired
    DlcMapper mapper;

    @GetMapping("/gestion")
    public List<ReponseListeGestionDlcDTO> getAllDlcGestion() {
        log.info("GET /api/dlc/gestion - getAllDlcGestion() called");
        return service.getAll()
            .stream()
            .map(mapper::toReponseListeGestionDlcDTO)
            .toList();
    }
}
