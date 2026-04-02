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

import sims.dto.dlc.DlcLegerDTO;
import sims.dto.dlc.ReponseCreationDlcDTO;
import sims.dto.dlc.ReponseListeGestionDlcDTO;
import sims.dto.dlc.ReponseModificationDlcDTO;
import sims.dto.dlc.RequeteCreationDlcDTO;
import sims.dto.dlc.RequeteModificationDlcDTO;
import sims.dto.dlc.TypeDlcDTO;
import sims.mapper.DlcMapper;
import sims.model.DLC;
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

    @GetMapping("/gestion/types")
    public List<TypeDlcDTO> getAllTypeDlcGestion() {
        log.info("GET /api/dlc/gestion/types - getAllTypeDlcGestion() called");
        return service.getAllTypeDLC()
            .stream()
            .map(mapper::toTypeDlcDTO)
            .toList();
    }

    @GetMapping("/gestion")
    public List<ReponseListeGestionDlcDTO> getAllDlcGestion() {
        log.info("GET /api/dlc/gestion - getAllDlcGestion() called");
        return service.getAllOrderByDateSortieAsc()
            .stream()
            .map(mapper::toReponseListeGestionDlcDTO)
            .toList();
    }

    @GetMapping("/selection")
    public List<DlcLegerDTO> getAllDlcSelection() {
        log.info("GET /api/dlc/selection - getAllDlcSelection() called");
        return service.getAllOrderByNomAsc()
            .stream()
            .map(mapper::toDlcLegerDTO)
            .toList();
    }

    @PostMapping("/gestion")
	public ReponseCreationDlcDTO addDlc(@RequestBody RequeteCreationDlcDTO requeteDlc) {
        log.info("POST /api/dlc/gestion - addDlc() called");
        DLC dlc = mapper.toDlc(requeteDlc);

        DLC dlcCree = service.create(dlc);

        return mapper.toReponseCreationDlcDTO(dlcCree);
	}
    
    @PutMapping("/gestion/{id}")
	public ReponseModificationDlcDTO updateDlc(@PathVariable Integer id, @RequestBody RequeteModificationDlcDTO requeteDlc) {
        log.info("PUT /api/dlc/gestion/{} - updateDlc() called", id);
        DLC dlc = mapper.toDlc(requeteDlc);
        dlc.setId(id);

        DLC dlcModifie = service.update(dlc);

        return mapper.toReponseModificationDlcDTO(dlcModifie);
	}

    @DeleteMapping("/gestion/{id}")
	public void deleteDlc(@PathVariable Integer id) {
		log.info("DELETE /api/dlc/gestion/{} - deleteDlc() called", id);
		service.deleteById(id);
	}
}
