package sims.mapper;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import sims.dto.aspiration.AspirationLegerDTO;
import sims.dto.aspiration.ReponseCreationAspirationDTO;
import sims.dto.aspiration.ReponseCreationEtapeAspirationDTO;
import sims.dto.aspiration.ReponseGestionAspirationDTO;
import sims.dto.aspiration.ReponseGestionEtapeAspirationDTO;
import sims.dto.aspiration.ReponseListeGestionAspirationDTO;
import sims.dto.aspiration.ReponseModificationAspirationDTO;
import sims.dto.aspiration.ReponseModificationEtapeAspirationDTO;
import sims.dto.aspiration.RequeteCreationAspirationDTO;
import sims.dto.aspiration.RequeteModificationAspirationDTO;
import sims.dto.dlc.DlcLegerDTO;
import sims.dto.trait.TraitLegerDTO;
import sims.dto.aspiration.TypeAspirationDTO;
import sims.model.Aspiration;
import sims.model.DLC;
import sims.model.EtapeAspiration;
import sims.model.TraitAspiration;
import sims.model.TypeAspiration;
import sims.service.AspirationService;

@Component
public class AspirationMapper {

    @Autowired
    private AspirationService service;

    @Autowired
    private DlcMapper dlcMapper;

    @Autowired
    private TraitAspirationMapper traitMapper;

    @Autowired
    private EtapeAspirationMapper etapeAspirationMapper;

    public TypeAspirationDTO toTypeAspirationDTO(TypeAspiration typeAspiration) {
        TypeAspirationDTO dto = new TypeAspirationDTO();
        dto.setCode(typeAspiration.name());
        dto.setNom(typeAspiration.getNom());
        dto.setImg(typeAspiration.getImg());

        return dto;
    }

    public TypeAspiration toTypeAspiration(TypeAspirationDTO dto) {
        return TypeAspiration.valueOf(dto.getCode());
    }

    // Aspiration vers AspirationDTO
    public AspirationLegerDTO toAspirationLegerDTO(Aspiration aspiration) {
        if (aspiration == null) {
            return null;
        }
        
        AspirationLegerDTO dto = new AspirationLegerDTO();
        dto.setId(aspiration.getId());
        dto.setNom(aspiration.getNom());
        dto.setImg(aspiration.getImg());

        return dto;
    }

    public ReponseListeGestionAspirationDTO toReponseListeGestionAspirationDTO(Aspiration aspiration) {
        ReponseListeGestionAspirationDTO dto = new ReponseListeGestionAspirationDTO();
        dto.setId(aspiration.getId());
        dto.setNom(aspiration.getNom());
        dto.setDescription(aspiration.getDescription());
        dto.setImg(aspiration.getImg());

        TypeAspirationDTO typeAspirationDTO = this.toTypeAspirationDTO(aspiration.getType());
        dto.setType(typeAspirationDTO);

        DlcLegerDTO dlcDto = dlcMapper.toDlcLegerDTO(aspiration.getDlc());
        dto.setDlc(dlcDto);
        
        return dto;
    }

    public ReponseGestionAspirationDTO toReponseGestionAspirationDTO(Aspiration aspiration) {
        ReponseGestionAspirationDTO dto = new ReponseGestionAspirationDTO();
        dto.setId(aspiration.getId());
        dto.setNom(aspiration.getNom());
        dto.setDescription(aspiration.getDescription());
        dto.setImg(aspiration.getImg());

        TypeAspirationDTO typeAspirationDTO = this.toTypeAspirationDTO(aspiration.getType());
        dto.setType(typeAspirationDTO);

        DlcLegerDTO dlcDTO = dlcMapper.toDlcLegerDTO(aspiration.getDlc());
        dto.setDlc(dlcDTO);

        TraitLegerDTO traitDTO = traitMapper.toTraitLegerDTO(aspiration.getTrait());
        dto.setTrait(traitDTO);

        List<ReponseGestionEtapeAspirationDTO> etapesDTO = aspiration.getEtapes()
            .stream()
            .map(this.etapeAspirationMapper::toReponseGestionEtapeAspirationDTO)
            .toList();
        dto.setEtapes(etapesDTO);

        return dto;
    }

    public ReponseCreationAspirationDTO toReponseCreationAspirationDTO(Aspiration aspiration) {
        ReponseCreationAspirationDTO dto = new ReponseCreationAspirationDTO();
        dto.setId(aspiration.getId());
        dto.setNom(aspiration.getNom());
        dto.setDescription(aspiration.getDescription());
        dto.setImg(aspiration.getImg());

        TypeAspirationDTO typeAspirationDTO = this.toTypeAspirationDTO(aspiration.getType());
        dto.setType(typeAspirationDTO);

        DlcLegerDTO dlcDTO = dlcMapper.toDlcLegerDTO(aspiration.getDlc());
        dto.setDlc(dlcDTO);

        TraitLegerDTO traitDTO = traitMapper.toTraitLegerDTO(aspiration.getTrait());
        dto.setTrait(traitDTO);

        List<ReponseCreationEtapeAspirationDTO> etapesDTO = aspiration.getEtapes()
            .stream()
            .map(this.etapeAspirationMapper::toReponseCreationEtapeAspirationDTO)
            .toList();
        dto.setEtapes(etapesDTO);

        return dto;
    }
    
    public ReponseModificationAspirationDTO toReponseModificationAspirationDTO(Aspiration aspiration) {
        ReponseModificationAspirationDTO dto = new ReponseModificationAspirationDTO();
        dto.setId(aspiration.getId());
        dto.setNom(aspiration.getNom());
        dto.setDescription(aspiration.getDescription());
        dto.setImg(aspiration.getImg());

        TypeAspirationDTO typeAspirationDTO = this.toTypeAspirationDTO(aspiration.getType());
        dto.setType(typeAspirationDTO);

        DlcLegerDTO dlcDTO = dlcMapper.toDlcLegerDTO(aspiration.getDlc());
        dto.setDlc(dlcDTO);

        TraitLegerDTO traitDTO = traitMapper.toTraitLegerDTO(aspiration.getTrait());
        dto.setTrait(traitDTO);

        List<ReponseModificationEtapeAspirationDTO> etapesDTO = aspiration.getEtapes()
            .stream()
            .map(this.etapeAspirationMapper::toReponseModificationEtapeAspirationDTO)
            .toList();
        dto.setEtapes(etapesDTO);

        return dto;
    }

    // AspirationDTO vers Aspiration
    public Aspiration toAspiration(AspirationLegerDTO dto) {
        return dto == null ? null : service.getById(dto.getId());
    }

    public Aspiration toAspiration(RequeteCreationAspirationDTO dto) {
        Aspiration aspiration = new Aspiration();
        aspiration.setNom(dto.getNom());
        aspiration.setDescription(dto.getDescription());
        aspiration.setImg(dto.getImg());

        TypeAspiration typeAspiration = this.toTypeAspiration(dto.getType());
        aspiration.setType(typeAspiration);

        DLC dlc = dlcMapper.toDlc(dto.getDlc());
        aspiration.setDlc(dlc);

        TraitAspiration traitAspiration = traitMapper.toTraitAspiration(dto.getTrait());
        aspiration.setTrait(traitAspiration);

        List<EtapeAspiration> etapesDTO = dto.getEtapes()
            .stream()
            .map(this.etapeAspirationMapper::toEtapeAspiration)
            .toList();
        aspiration.setEtapes(etapesDTO);

        return aspiration;
    }
    
    public Aspiration toAspiration(RequeteModificationAspirationDTO dto) {
        Aspiration aspiration = new Aspiration();
        aspiration.setNom(dto.getNom());
        aspiration.setDescription(dto.getDescription());
        aspiration.setImg(dto.getImg());

        TypeAspiration typeAspiration = this.toTypeAspiration(dto.getType());
        aspiration.setType(typeAspiration);

        DLC dlc = dlcMapper.toDlc(dto.getDlc());
        aspiration.setDlc(dlc);

        TraitAspiration traitAspiration = traitMapper.toTraitAspiration(dto.getTrait());
        aspiration.setTrait(traitAspiration);

        List<EtapeAspiration> etapesDTO = dto.getEtapes()
            .stream()
            .map(this.etapeAspirationMapper::toEtapeAspiration)
            .toList();
        aspiration.setEtapes(etapesDTO);

        return aspiration;
    }
}
