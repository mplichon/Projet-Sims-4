package sims.mapper;

import org.springframework.stereotype.Component;

import sims.dto.CategorieSimDTO;
import sims.model.CategorieSim;

@Component
public class SimMapper {
    
    public CategorieSimDTO toCategorieSimDTO(CategorieSim categorieSim) {
        CategorieSimDTO dto = new CategorieSimDTO();
        dto.setCode(categorieSim.name());
        dto.setNom(categorieSim.getNom());

        return dto;
    }
}
