package sims.mapper;

import org.springframework.stereotype.Component;

import sims.dto.dlc.DlcLegerDTO;
import sims.dto.dlc.ReponseListeGestionDlcDTO;
import sims.dto.dlc.TypeDlcDTO;
import sims.model.DLC;
import sims.model.TypeDLC;

@Component
public class DlcMapper {

    public TypeDlcDTO toTypeDlcDTO(TypeDLC typeDlc) {
        TypeDlcDTO dto = new TypeDlcDTO();
        dto.setCode(typeDlc.name());
        dto.setNom(typeDlc.getNom());

        return dto;
    }

    public DlcLegerDTO toDlcLegerDTO(DLC dlc) {
        DlcLegerDTO dto = new DlcLegerDTO();
        dto.setId(dlc.getId());
        dto.setNom(dlc.getNom());

        return dto;
    }

    public ReponseListeGestionDlcDTO toReponseListeGestionDlcDTO(DLC dlc) {
        ReponseListeGestionDlcDTO dto = new ReponseListeGestionDlcDTO();
        dto.setId(dlc.getId());
        dto.setNom(dlc.getNom());
        dto.setDateSortie(dlc.getDateSortie());
        dto.setDescription(dlc.getDescription());
        dto.setImg(dlc.getImg());

        TypeDlcDTO typeDlcDTO = this.toTypeDlcDTO(dlc.getType());
        dto.setType(typeDlcDTO);

        return dto;
    }
}
