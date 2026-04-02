package sims.mapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import sims.dto.aspiration.AspirationLegerDTO;
import sims.dto.aspiration.ReponseListeGestionAspirationDTO;
import sims.dto.dlc.DlcLegerDTO;
import sims.dto.aspiration.TypeAspirationDTO;
import sims.model.Aspiration;
import sims.model.TypeAspiration;
import sims.service.AspirationService;

@Component
public class AspirationMapper {

    @Autowired
    private AspirationService service;

    @Autowired
    private DlcMapper dlcMapper;

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

    // AspirationDTO vers Aspiration
    public Aspiration toAspiration(AspirationLegerDTO dto) {
        return service.getById(dto.getId());
    }
}
