package sims.manager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import sims.constant.Constantes;
import sims.dto.trait.TraitGestionDTO;
import sims.dto.trait.TypeTraitDTO;
import sims.mapper.TraitMapper;
import sims.model.TraitBoutique;
import sims.model.TraitDeCaractere;
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
    public TraitGestionDTO addTrait(TraitGestionDTO requeteCreationDTO) {
        TraitBoutique trait = mapper.toTraitBoutique(requeteCreationDTO);
        TraitBoutique traitCree = (TraitBoutique) service.create(trait);
        return mapper.toTraitGestionDTO(traitCree);
    }

    @Override
    public TraitGestionDTO updateTrait(Integer id, TraitGestionDTO requeteModificationDTO) {
        TraitBoutique trait = mapper.toTraitBoutique(requeteModificationDTO);
        trait.setId(id);
        TraitBoutique traitModifie = (TraitBoutique) service.create(trait);
        return mapper.toTraitGestionDTO(traitModifie);
    }

    @Override
    public TraitGestionDTO getTraitById(Integer id) {
        TraitBoutique trait = (TraitBoutique) service.getById(id);
        return mapper.toTraitGestionDTO(trait);
    }

    @Override
    public TraitGestionDTO toTraitGestionDTO(TraitDeCaractere trait) {
        return mapper.toTraitGestionDTO((TraitBoutique) trait);
    };
}
