package sims.mapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import sims.dto.CategorieSimDTO;
import sims.dto.competence.ReponseListeGestionCompetenceDTO;
import sims.dto.dlc.DlcLegerDTO;
import sims.model.Competence;

@Component
public class CompetenceMapper {

    @Autowired
    SimMapper categorieSimMapper;
    
    @Autowired
    DlcMapper dlcMapper;

    public ReponseListeGestionCompetenceDTO toReponseListeGestionCompetenceDTO(Competence competence) {
        ReponseListeGestionCompetenceDTO dto = new ReponseListeGestionCompetenceDTO();
        dto.setId(competence.getId());
        dto.setNom(competence.getNom());
        dto.setDescription(competence.getDescription());
        dto.setImg(competence.getImg());

        CategorieSimDTO categorieSimDTO = categorieSimMapper.toCategorieSimDTO(competence.getCategorieSim());
        dto.setCategorieSim(categorieSimDTO);
        
        DlcLegerDTO dlcDTO = dlcMapper.toDlcLegerDTO(competence.getDlc());
        dto.setDlc(dlcDTO);

        return dto;
    }
}
