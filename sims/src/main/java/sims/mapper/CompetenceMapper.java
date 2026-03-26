package sims.mapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import sims.dto.CategorieSimDTO;
import sims.dto.competence.ReponseCreationCompetenceDTO;
import sims.dto.competence.ReponseGestionCompetenceDTO;
import sims.dto.competence.ReponseListeGestionCompetenceDTO;
import sims.dto.competence.ReponseModificationCompetenceDTO;
import sims.dto.competence.RequeteCreationCompetenceDTO;
import sims.dto.competence.RequeteModificationCompetenceDTO;
import sims.dto.dlc.DlcLegerDTO;
import sims.model.CategorieSim;
import sims.model.Competence;
import sims.model.DLC;

@Component
public class CompetenceMapper {

    @Autowired
    SimMapper simMapper;
    
    @Autowired
    DlcMapper dlcMapper;

    // Competence vers CompetenceDTO
    public ReponseListeGestionCompetenceDTO toReponseListeGestionCompetenceDTO(Competence competence) {
        ReponseListeGestionCompetenceDTO dto = new ReponseListeGestionCompetenceDTO();
        dto.setId(competence.getId());
        dto.setNom(competence.getNom());
        dto.setDescription(competence.getDescription());
        dto.setImg(competence.getImg());

        CategorieSimDTO categorieSimDTO = simMapper.toCategorieSimDTO(competence.getCategorieSim());
        dto.setCategorieSim(categorieSimDTO);
        
        DlcLegerDTO dlcDTO = dlcMapper.toDlcLegerDTO(competence.getDlc());
        dto.setDlc(dlcDTO);

        return dto;
    }

    public ReponseGestionCompetenceDTO toReponseGestionCompetenceDTO(Competence competence) {
        ReponseGestionCompetenceDTO dto = new ReponseGestionCompetenceDTO();
        dto.setId(competence.getId());
        dto.setNom(competence.getNom());
        dto.setDescription(competence.getDescription());
        dto.setImg(competence.getImg());
        dto.setNiveauMax(competence.getNiveauMax());

        CategorieSimDTO categorieSimDTO = simMapper.toCategorieSimDTO(competence.getCategorieSim());
        dto.setCategorieSim(categorieSimDTO);
        
        DlcLegerDTO dlcDTO = dlcMapper.toDlcLegerDTO(competence.getDlc());
        dto.setDlc(dlcDTO);

        return dto;
    }

    public ReponseCreationCompetenceDTO toReponseCreationCompetenceDTO(Competence competence) {
        ReponseCreationCompetenceDTO dto = new ReponseCreationCompetenceDTO();
        dto.setId(competence.getId());
        dto.setNom(competence.getNom());
        dto.setDescription(competence.getDescription());
        dto.setImg(competence.getImg());
        dto.setNiveauMax(competence.getNiveauMax());

        CategorieSimDTO categorieSimDTO = simMapper.toCategorieSimDTO(competence.getCategorieSim());
        dto.setCategorieSim(categorieSimDTO);

        DlcLegerDTO dlcDTO = dlcMapper.toDlcLegerDTO(competence.getDlc());
        dto.setDlc(dlcDTO);

        return dto;
    }
    
    public ReponseModificationCompetenceDTO toReponseModificationCompetenceDTO(Competence competence) {
        ReponseModificationCompetenceDTO dto = new ReponseModificationCompetenceDTO();
        dto.setId(competence.getId());
        dto.setNom(competence.getNom());
        dto.setDescription(competence.getDescription());
        dto.setImg(competence.getImg());
        dto.setNiveauMax(competence.getNiveauMax());

        CategorieSimDTO categorieSimDTO = simMapper.toCategorieSimDTO(competence.getCategorieSim());
        dto.setCategorieSim(categorieSimDTO);

        DlcLegerDTO dlcDTO = dlcMapper.toDlcLegerDTO(competence.getDlc());
        dto.setDlc(dlcDTO);

        return dto;
    }

    // CompetenceDTO vers Competence
    public Competence toCompetence(RequeteCreationCompetenceDTO dto) {
        Competence competence = new Competence();
        competence.setNom(dto.getNom());
        competence.setDescription(dto.getDescription());
        competence.setImg(dto.getImg());
        competence.setNiveauMax(dto.getNiveauMax());

        CategorieSim categorieSim = simMapper.toCategorieSim(dto.getCategorieSim());
        competence.setCategorieSim(categorieSim);

        DLC dlc = dlcMapper.toDlc(dto.getDlc());
        competence.setDlc(dlc);

        return competence;
    }
    
    public Competence toCompetence(RequeteModificationCompetenceDTO dto) {
        Competence competence = new Competence();
        competence.setId(dto.getId());
        competence.setNom(dto.getNom());
        competence.setDescription(dto.getDescription());
        competence.setImg(dto.getImg());
        competence.setNiveauMax(dto.getNiveauMax());

        CategorieSim categorieSim = simMapper.toCategorieSim(dto.getCategorieSim());
        competence.setCategorieSim(categorieSim);

        DLC dlc = dlcMapper.toDlc(dto.getDlc());
        competence.setDlc(dlc);

        return competence;
    }
}
