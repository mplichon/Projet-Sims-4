package sims.manager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import sims.constant.Constantes;
import sims.dto.trait.ReponseCreationTraitDTO;
import sims.dto.trait.ReponseModificationTraitDTO;
import sims.dto.trait.RequeteCreationTraitDTO;
import sims.dto.trait.RequeteModificationTraitDTO;
import sims.dto.trait.TypeTraitDTO;
import sims.mapper.TraitMapper;
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
    public ReponseCreationTraitDTO addTrait(RequeteCreationTraitDTO requeteCreationDTO) {
        TraitEducation trait = mapper.toTraitEducation(requeteCreationDTO);
        TraitEducation traitCree = (TraitEducation) service.create(trait);
        return mapper.toReponseCreationTraitDTO(traitCree);
    }

    @Override
    public ReponseModificationTraitDTO updateTrait(Integer id, RequeteModificationTraitDTO requeteModificationDTO) {
        TraitEducation trait = mapper.toTraitEducation(requeteModificationDTO);
        trait.setId(id);
        TraitEducation traitModifie = (TraitEducation) service.create(trait);
        return mapper.toReponseModificationTraitDTO(traitModifie);
    }

    @Override
    public ReponseModificationTraitDTO getTraitById(Integer id) {
        TraitEducation trait = (TraitEducation) service.getById(id);
        return mapper.toReponseModificationTraitDTO(trait);
    }
}
