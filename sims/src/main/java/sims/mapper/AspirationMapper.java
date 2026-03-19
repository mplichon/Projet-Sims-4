package sims.mapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import sims.dto.aspiration.ReponseListeGestionAspirationDTO;
import sims.dto.dlc.DlcLegerDTO;
import sims.dto.aspiration.TypeAspirationDTO;
import sims.model.Aspiration;
import sims.model.TypeAspiration;

@Component
public class AspirationMapper {

    @Autowired
    private DlcMapper dlcMapper;

    public TypeAspirationDTO toTypeAspirationDTO(TypeAspiration typeAspiration) {
        TypeAspirationDTO dto = new TypeAspirationDTO();
        dto.setCode(typeAspiration.name());
        dto.setNom(typeAspiration.getNom());

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
}
