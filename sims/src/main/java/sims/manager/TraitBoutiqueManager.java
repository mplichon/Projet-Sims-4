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
import sims.model.TraitBoutique;
import sims.model.TypeTrait;
import sims.service.TraitDeCaractereService;

@Component
public class TraitBoutiqueManager implements TraitManager {

    @Autowired
    private TraitMapper mapper;

    @Autowired
    private TraitDeCaractereService service;

    
    @Override
    public boolean canManage(TypeTraitDTO typeDTO) {
        TypeTrait type = mapper.toTypeTrait(typeDTO);
        return Constantes.TYPES_TRAIT_BOUTIQUE.contains(type);
    }

    @Override
    public ReponseCreationTraitDTO addTrait(RequeteCreationTraitDTO requeteCreationDTO) {
        TraitBoutique trait = mapper.toTraitBoutique(requeteCreationDTO);
        TraitBoutique traitCree = (TraitBoutique) service.create(trait);
        return mapper.toReponseCreationTraitDTO(traitCree);
    }

    @Override
    public ReponseModificationTraitDTO updateTrait(Integer id, RequeteModificationTraitDTO requeteModificationDTO) {
        TraitBoutique trait = mapper.toTraitBoutique(requeteModificationDTO);
        trait.setId(id);
        TraitBoutique traitModifie = (TraitBoutique) service.create(trait);
        return mapper.toReponseModificationTraitDTO(traitModifie);
    }

    @Override
    public ReponseModificationTraitDTO getTraitById(Integer id) {
        TraitBoutique trait = (TraitBoutique) service.getById(id);
        return mapper.toReponseModificationTraitDTO(trait);
    }
}
