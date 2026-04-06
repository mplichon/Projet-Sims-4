package sims.mapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import sims.dto.trait.TraitLegerDTO;
import sims.model.TraitAspiration;
import sims.model.TraitDeCaractere;
import sims.service.TraitDeCaractereService;

@Component
public class TraitAspirationMapper {

    @Autowired
    private TraitDeCaractereService service;

    public TraitLegerDTO toTraitLegerDTO(TraitDeCaractere trait) {
        if (trait == null) {
            return null;
        }

        TraitLegerDTO dto = new TraitLegerDTO();
        dto.setId(trait.getId());
        dto.setNom(trait.getNom());
        dto.setImg(trait.getImg());

        return dto;
    }

    public TraitAspiration toTraitAspiration(TraitLegerDTO dto) {
        if (dto == null) {
            return null;
        }
        
        return service.getTraitAspirationById(dto.getId());
    }
}
