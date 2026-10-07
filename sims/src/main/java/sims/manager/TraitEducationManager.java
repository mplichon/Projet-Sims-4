package sims.manager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import sims.constant.Constantes;
import sims.dto.trait.TraitGestionDTO;
import sims.dto.trait.TypeTraitDTO;
import sims.mapper.TraitMapper;
import sims.model.TraitDeCaractere;
import sims.model.TraitEducation;
import sims.model.TypeTrait;
import sims.service.TraitDeCaractereService;

@Component
public class TraitEducationManager implements TraitManager {

    @Autowired
    private TraitMapper mapper;

    @Autowired
    private TraitDeCaractereService service;

    
    @Override
    public boolean canManage(TypeTraitDTO typeDTO) {
        TypeTrait type = mapper.toTypeTrait(typeDTO);
        return Constantes.TYPES_TRAIT_EDUCATION.contains(type);
    }

    @Override
    public TraitGestionDTO addTrait(TraitGestionDTO requeteCreationDTO) {
        TraitEducation trait = mapper.toTraitEducation(requeteCreationDTO);
        TraitEducation traitCree = (TraitEducation) service.create(trait);
        return mapper.toTraitGestionDTO(traitCree);
    }

    @Override
    public TraitGestionDTO updateTrait(Integer id, TraitGestionDTO requeteModificationDTO) {
        TraitEducation trait = mapper.toTraitEducation(requeteModificationDTO);
        trait.setId(id);
        TraitEducation traitModifie = (TraitEducation) service.create(trait);
        return mapper.toTraitGestionDTO(traitModifie);
    }

    @Override
    public TraitGestionDTO getTraitById(Integer id) {
        TraitEducation trait = (TraitEducation) service.getById(id);
        return mapper.toTraitGestionDTO(trait);
    }

    @Override
    public TraitGestionDTO toTraitGestionDTO(TraitDeCaractere trait) {
        return mapper.toTraitGestionDTO((TraitEducation) trait);
    };
}
