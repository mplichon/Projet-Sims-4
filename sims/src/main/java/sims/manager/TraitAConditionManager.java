package sims.manager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import sims.constant.Constantes;
import sims.dto.trait.TraitGestionDTO;
import sims.dto.trait.TypeTraitDTO;
import sims.mapper.TraitMapper;
import sims.model.TraitACondition;
import sims.model.TraitDeCaractere;
import sims.model.TypeTrait;
import sims.service.TraitDeCaractereService;

@Component
public class TraitAConditionManager implements TraitManager {

    @Autowired
    private TraitMapper mapper;

    @Autowired
    private TraitDeCaractereService service;

    
    @Override
    public boolean canManage(TypeTraitDTO typeDTO) {
        TypeTrait type = mapper.toTypeTrait(typeDTO);
        return Constantes.TYPES_TRAIT_A_CONDITION.contains(type);
    }

    @Override
    public TraitGestionDTO addTrait(TraitGestionDTO requeteCreationDTO) {
        TraitACondition trait = mapper.toTraitACondition(requeteCreationDTO);
        TraitACondition traitCree = (TraitACondition) service.create(trait);
        return mapper.toTraitGestionDTO(traitCree);
    }

    @Override
    public TraitGestionDTO updateTrait(Integer id, TraitGestionDTO requeteModificationDTO) {
        TraitACondition trait = mapper.toTraitACondition(requeteModificationDTO);
        trait.setId(id);
        TraitACondition traitModifie = (TraitACondition) service.create(trait);
        return mapper.toTraitGestionDTO(traitModifie);
    }

    @Override
    public TraitGestionDTO getTraitById(Integer id) {
        TraitACondition trait = (TraitACondition) service.getById(id);
        return mapper.toTraitGestionDTO(trait);
    }

    @Override
    public TraitGestionDTO toTraitGestionDTO(TraitDeCaractere trait) {
        return mapper.toTraitGestionDTO((TraitACondition) trait);
    };
}
