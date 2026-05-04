package sims.mapper;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import sims.dto.carriere.ReponseCreationBrancheCarriereDTO;
import sims.dto.carriere.ReponseCreationRangCarriereDTO;
import sims.dto.carriere.ReponseGestionBrancheCarriereDTO;
import sims.dto.carriere.ReponseGestionRangCarriereDTO;
import sims.dto.carriere.ReponseModificationBrancheCarriereDTO;
import sims.dto.carriere.ReponseModificationRangCarriereDTO;
import sims.dto.carriere.RequeteCreationBrancheCarriereDTO;
import sims.dto.carriere.RequeteModificationBrancheCarriereDTO;
import sims.model.BrancheCarriere;
import sims.model.RangCarriere;

@Component
public class BrancheCarriereMapper {

    @Autowired
    private RangCarriereMapper rangCarriereMapper;

    // BrancheCarriere vers BrancheCarriereDTO
    public ReponseGestionBrancheCarriereDTO toReponseGestionBrancheCarriereDTO(BrancheCarriere brancheCarriere) {
        ReponseGestionBrancheCarriereDTO dto = new ReponseGestionBrancheCarriereDTO();
        dto.setId(brancheCarriere.getId());
        dto.setNom(brancheCarriere.getNom());
        dto.setDescription(brancheCarriere.getDescription());
        dto.setImg(brancheCarriere.getImg());

        List<ReponseGestionRangCarriereDTO> rangsDTO = brancheCarriere.getRangs()
            .stream()
            .map(this.rangCarriereMapper::toReponseGestionRangCarriereDTO)
            .toList();
        dto.setRangs(rangsDTO);

        return dto;
    }

    public ReponseCreationBrancheCarriereDTO toReponseCreationBrancheCarriereDTO(BrancheCarriere brancheCarriere) {
        ReponseCreationBrancheCarriereDTO dto = new ReponseCreationBrancheCarriereDTO();
        dto.setId(brancheCarriere.getId());
        dto.setNom(brancheCarriere.getNom());
        dto.setDescription(brancheCarriere.getDescription());
        dto.setImg(brancheCarriere.getImg());

        List<ReponseCreationRangCarriereDTO> rangsDTO = brancheCarriere.getRangs()
            .stream()
            .map(this.rangCarriereMapper::toReponseCreationRangCarriereDTO)
            .toList();
        dto.setRangs(rangsDTO);

        return dto;
    }

    public ReponseModificationBrancheCarriereDTO toReponseModificationBrancheCarriereDTO(BrancheCarriere brancheCarriere) {
        ReponseModificationBrancheCarriereDTO dto = new ReponseModificationBrancheCarriereDTO();
        dto.setId(brancheCarriere.getId());
        dto.setNom(brancheCarriere.getNom());
        dto.setDescription(brancheCarriere.getDescription());
        dto.setImg(brancheCarriere.getImg());

        List<ReponseModificationRangCarriereDTO> rangsDTO = brancheCarriere.getRangs()
            .stream()
            .map(this.rangCarriereMapper::toReponseModificationRangCarriereDTO)
            .toList();
        dto.setRangs(rangsDTO);

        return dto;
    }

    // BrancheCarriereDTO vers BrancheCarriere
    public BrancheCarriere toBrancheCarriere(RequeteCreationBrancheCarriereDTO dto) {
        BrancheCarriere brancheCarriere = new BrancheCarriere();
        brancheCarriere.setNom(dto.getNom());
        brancheCarriere.setDescription(dto.getDescription());
        brancheCarriere.setImg(dto.getImg());

        List<RangCarriere> rangs = dto.getRangs()
            .stream()
            .map(this.rangCarriereMapper::toRangCarriere)
            .toList();
        brancheCarriere.setRangs(rangs);

        return brancheCarriere;
    }

    public BrancheCarriere toBrancheCarriere(RequeteModificationBrancheCarriereDTO dto) {
        BrancheCarriere brancheCarriere = new BrancheCarriere();
        brancheCarriere.setId(dto.getId());
        brancheCarriere.setNom(dto.getNom());
        brancheCarriere.setDescription(dto.getDescription());
        brancheCarriere.setImg(dto.getImg());

        List<RangCarriere> rangs = dto.getRangs()
            .stream()
            .map(this.rangCarriereMapper::toRangCarriere)
            .toList();
        brancheCarriere.setRangs(rangs);

        return brancheCarriere;
    }
}
