package sims.mapper;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import sims.dto.carriere.ReponseCreationBrancheCarriereDTO;
import sims.dto.carriere.ReponseCreationCarriereDTO;
import sims.dto.carriere.ReponseCreationRangCarriereDTO;
import sims.dto.carriere.ReponseGestionBrancheCarriereDTO;
import sims.dto.carriere.ReponseGestionCarriereDTO;
import sims.dto.carriere.ReponseGestionRangCarriereDTO;
import sims.dto.carriere.ReponseListeGestionCarriereDTO;
import sims.dto.carriere.ReponseModificationBrancheCarriereDTO;
import sims.dto.carriere.ReponseModificationCarriereDTO;
import sims.dto.carriere.ReponseModificationRangCarriereDTO;
import sims.dto.carriere.RequeteCreationCarriereDTO;
import sims.dto.carriere.RequeteModificationCarriereDTO;
import sims.dto.carriere.TypeCarriereDTO;
import sims.dto.dlc.DlcLegerDTO;
import sims.model.BrancheCarriere;
import sims.model.Carriere;
import sims.model.DLC;
import sims.model.RangCarriere;
import sims.model.TypeCarriere;

@Component
public class CarriereMapper {

    @Autowired
    private DlcMapper dlcMapper;

    @Autowired
    private RangCarriereMapper rangCarriereMapper;
    
    @Autowired
    private BrancheCarriereMapper brancheCarriereMapper;

    public TypeCarriereDTO toTypeCarriereDTO(TypeCarriere typeCarriere) {
        TypeCarriereDTO dto = new TypeCarriereDTO();
        dto.setCode(typeCarriere.name());
        dto.setNom(typeCarriere.getNom());

        return dto;
    }

    public TypeCarriere toTypeCarriere(TypeCarriereDTO dto) {
        return TypeCarriere.valueOf(dto.getCode());
    }

    // Carriere vers CarriereDTO
    public ReponseListeGestionCarriereDTO toReponseListeGestionCarriereDTO(Carriere carriere) {
        ReponseListeGestionCarriereDTO dto = new ReponseListeGestionCarriereDTO();
        dto.setId(carriere.getId());
        dto.setNom(carriere.getNom());
        dto.setDescription(carriere.getDescription());
        dto.setImg(carriere.getImg());

        TypeCarriereDTO typeCarriereDTO = this.toTypeCarriereDTO(carriere.getType());
        dto.setType(typeCarriereDTO);

        DlcLegerDTO dlcDto = dlcMapper.toDlcLegerDTO(carriere.getDlc());
        dto.setDlc(dlcDto);
        
        return dto;
    }

    public ReponseGestionCarriereDTO toReponseGestionCarriereDTO(Carriere carriere) {
        ReponseGestionCarriereDTO dto = new ReponseGestionCarriereDTO();
        dto.setId(carriere.getId());
        dto.setNom(carriere.getNom());
        dto.setDescription(carriere.getDescription());
        dto.setImg(carriere.getImg());

        TypeCarriereDTO typeCarriereDTO = this.toTypeCarriereDTO(carriere.getType());
        dto.setType(typeCarriereDTO);

        DlcLegerDTO dlcDTO = dlcMapper.toDlcLegerDTO(carriere.getDlc());
        dto.setDlc(dlcDTO);

        List<ReponseGestionRangCarriereDTO> rangsDTO = carriere.getRangs()
            .stream()
            .map(this.rangCarriereMapper::toReponseGestionRangCarriereDTO)
            .toList();
        dto.setRangs(rangsDTO);

        List<ReponseGestionBrancheCarriereDTO> branchesDTO = carriere.getBranches()
            .stream()
            .map(this.brancheCarriereMapper::toReponseGestionBrancheCarriereDTO)
            .toList();
        dto.setBranches(branchesDTO);

        return dto;
    }

    public ReponseCreationCarriereDTO toReponseCreationCarriereDTO(Carriere carriere) {
        ReponseCreationCarriereDTO dto = new ReponseCreationCarriereDTO();
        dto.setId(carriere.getId());
        dto.setNom(carriere.getNom());
        dto.setDescription(carriere.getDescription());
        dto.setImg(carriere.getImg());

        TypeCarriereDTO typeCarriereDTO = this.toTypeCarriereDTO(carriere.getType());
        dto.setType(typeCarriereDTO);

        DlcLegerDTO dlcDTO = dlcMapper.toDlcLegerDTO(carriere.getDlc());
        dto.setDlc(dlcDTO);

        List<ReponseCreationRangCarriereDTO> rangsDTO = carriere.getRangs()
            .stream()
            .map(this.rangCarriereMapper::toReponseCreationRangCarriereDTO)
            .toList();
        dto.setRangs(rangsDTO);

        List<ReponseCreationBrancheCarriereDTO> branchesDTO = carriere.getBranches()
            .stream()
            .map(this.brancheCarriereMapper::toReponseCreationBrancheCarriereDTO)
            .toList();
        dto.setBranches(branchesDTO);

        return dto;
    }

    public ReponseModificationCarriereDTO toReponseModificationCarriereDTO(Carriere carriere) {
        ReponseModificationCarriereDTO dto = new ReponseModificationCarriereDTO();
        dto.setId(carriere.getId());
        dto.setNom(carriere.getNom());
        dto.setDescription(carriere.getDescription());
        dto.setImg(carriere.getImg());

        TypeCarriereDTO typeCarriereDTO = this.toTypeCarriereDTO(carriere.getType());
        dto.setType(typeCarriereDTO);

        DlcLegerDTO dlcDTO = dlcMapper.toDlcLegerDTO(carriere.getDlc());
        dto.setDlc(dlcDTO);

        List<ReponseModificationRangCarriereDTO> rangsDTO = carriere.getRangs()
            .stream()
            .map(this.rangCarriereMapper::toReponseModificationRangCarriereDTO)
            .toList();
        dto.setRangs(rangsDTO);

        List<ReponseModificationBrancheCarriereDTO> branchesDTO = carriere.getBranches()
            .stream()
            .map(this.brancheCarriereMapper::toReponseModificationBrancheCarriereDTO)
            .toList();
        dto.setBranches(branchesDTO);

        return dto;
    }

    // CarriereDTO vers Carriere
    public Carriere toCarriere(RequeteCreationCarriereDTO dto) {
        Carriere carriere = new Carriere();
        carriere.setNom(dto.getNom());
        carriere.setDescription(dto.getDescription());
        carriere.setImg(dto.getImg());

        TypeCarriere typeCarriere = this.toTypeCarriere(dto.getType());
        carriere.setType(typeCarriere);

        DLC dlc = dlcMapper.toDlc(dto.getDlc());
        carriere.setDlc(dlc);

        List<RangCarriere> rangs = dto.getRangs()
            .stream()
            .map(this.rangCarriereMapper::toRangCarriere)
            .toList();
        carriere.setRangs(rangs);

        List<BrancheCarriere> branches = dto.getBranches()
            .stream()
            .map(this.brancheCarriereMapper::toBrancheCarriere)
            .toList();
        carriere.setBranches(branches);

        return carriere;
    }

    public Carriere toCarriere(RequeteModificationCarriereDTO dto) {
        Carriere carriere = new Carriere();
        carriere.setId(dto.getId());
        carriere.setNom(dto.getNom());
        carriere.setDescription(dto.getDescription());
        carriere.setImg(dto.getImg());

        TypeCarriere typeCarriere = this.toTypeCarriere(dto.getType());
        carriere.setType(typeCarriere);

        DLC dlc = dlcMapper.toDlc(dto.getDlc());
        carriere.setDlc(dlc);

        List<RangCarriere> rangs = dto.getRangs()
            .stream()
            .map(this.rangCarriereMapper::toRangCarriere)
            .toList();
        carriere.setRangs(rangs);

        List<BrancheCarriere> branches = dto.getBranches()
            .stream()
            .map(this.brancheCarriereMapper::toBrancheCarriere)
            .toList();
        carriere.setBranches(branches);

        return carriere;
    }
}
