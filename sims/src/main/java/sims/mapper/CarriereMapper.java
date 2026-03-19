package sims.mapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import sims.dto.carriere.ReponseListeGestionCarriereDTO;
import sims.dto.carriere.TypeCarriereDTO;
import sims.dto.dlc.DlcLegerDTO;
import sims.model.Carriere;
import sims.model.TypeCarriere;

@Component
public class CarriereMapper {

    @Autowired
    private DlcMapper dlcMapper;

    public TypeCarriereDTO toTypeCarriereDTO(TypeCarriere typeCarriere) {
        TypeCarriereDTO dto = new TypeCarriereDTO();
        dto.setCode(typeCarriere.name());
        dto.setNom(typeCarriere.getNom());

        return dto;
    }

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
}
