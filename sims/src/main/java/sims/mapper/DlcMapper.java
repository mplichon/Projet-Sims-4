package sims.mapper;

import org.springframework.stereotype.Component;

import sims.dto.dlc.DlcLegerDTO;
import sims.dto.dlc.ReponseCreationDlcDTO;
import sims.dto.dlc.ReponseListeGestionDlcDTO;
import sims.dto.dlc.ReponseModificationDlcDTO;
import sims.dto.dlc.RequeteCreationDlcDTO;
import sims.dto.dlc.RequeteModificationDlcDTO;
import sims.dto.dlc.TypeDlcDTO;
import sims.model.DLC;
import sims.model.TypeDLC;

@Component
public class DlcMapper {

    // TypeDlc
    public TypeDlcDTO toTypeDlcDTO(TypeDLC typeDlc) {
        TypeDlcDTO dto = new TypeDlcDTO();
        dto.setCode(typeDlc.name());
        dto.setNom(typeDlc.getNom());
        dto.setCouleur(typeDlc.getCouleur());

        return dto;
    }

    public TypeDLC toTypeDlc(TypeDlcDTO dto) {
        return TypeDLC.valueOf(dto.getCode());
    }

    // DLC vers DlcDTO
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
    
    public ReponseCreationDlcDTO toReponseCreationDlcDTO(DLC dlc) {
        ReponseCreationDlcDTO dto = new ReponseCreationDlcDTO();
        dto.setId(dlc.getId());
        dto.setNom(dlc.getNom());
        dto.setDateSortie(dlc.getDateSortie());
        dto.setDescription(dlc.getDescription());
        dto.setImg(dlc.getImg());

        TypeDlcDTO typeDlcDTO = this.toTypeDlcDTO(dlc.getType());
        dto.setType(typeDlcDTO);

        return dto;
    }
    
    public ReponseModificationDlcDTO toReponseModificationDlcDTO(DLC dlc) {
        ReponseModificationDlcDTO dto = new ReponseModificationDlcDTO();
        dto.setId(dlc.getId());
        dto.setNom(dlc.getNom());
        dto.setDateSortie(dlc.getDateSortie());
        dto.setDescription(dlc.getDescription());
        dto.setImg(dlc.getImg());

        TypeDlcDTO typeDlcDTO = this.toTypeDlcDTO(dlc.getType());
        dto.setType(typeDlcDTO);

        return dto;
    }

    // DlcDTO vers DLC
    public DLC toDlc(RequeteCreationDlcDTO dto) {
        DLC dlc = new DLC();
        dlc.setNom(dto.getNom());
        dlc.setDateSortie(dto.getDateSortie());
        dlc.setDescription(dto.getDescription());
        dlc.setImg(dto.getImg());

        TypeDLC typeDlc = this.toTypeDlc(dto.getType());
        dlc.setType(typeDlc);

        return dlc;
    }
    
    public DLC toDlc(RequeteModificationDlcDTO dto) {
        DLC dlc = new DLC();
        dlc.setId(dto.getId());
        dlc.setNom(dto.getNom());
        dlc.setDateSortie(dto.getDateSortie());
        dlc.setDescription(dto.getDescription());
        dlc.setImg(dto.getImg());

        TypeDLC typeDlc = this.toTypeDlc(dto.getType());
        dlc.setType(typeDlc);

        return dlc;
    }
}
