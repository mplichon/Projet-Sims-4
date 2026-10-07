package sims.manager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import sims.constant.Constantes;
import sims.dto.trait.TraitGestionDTO;
import sims.dto.trait.TypeTraitDTO;
import sims.mapper.TraitMapper;
import sims.model.TraitAEffets;
import sims.model.TraitDeCaractere;
import sims.model.TypeTrait;
import sims.service.TraitDeCaractereService;

@Component
public class TraitAEffetsManager implements TraitManager {

    @Autowired
    private TraitMapper mapper;

    @Autowired
    private TraitDeCaractereService service;

    
    @Override
    public boolean canManage(TypeTraitDTO typeDTO) {
        TypeTrait type = mapper.toTypeTrait(typeDTO);
        return Constantes.TYPES_TRAIT_A_EFFETS.contains(type);
    }

    @Override
    public TraitGestionDTO addTrait(TraitGestionDTO requeteCreationDTO) {
        TraitAEffets trait = mapper.toTraitAEffets(requeteCreationDTO);
        TraitAEffets traitCree = (TraitAEffets) service.create(trait);
        return mapper.toTraitGestionDTO(traitCree);
    }

    @Override
    public TraitGestionDTO updateTrait(Integer id, TraitGestionDTO requeteModificationDTO) {
        TraitAEffets trait = mapper.toTraitAEffets(requeteModificationDTO);
        trait.setId(id);
        TraitAEffets traitModifie = (TraitAEffets) service.create(trait);
        return mapper.toTraitGestionDTO(traitModifie);
    }

    @Override
    public TraitGestionDTO getTraitById(Integer id) {
        TraitAEffets trait = (TraitAEffets) service.getById(id);
        return mapper.toTraitGestionDTO(trait);
    }

    @Override
    public TraitGestionDTO toTraitGestionDTO(TraitDeCaractere trait) {
        return mapper.toTraitGestionDTO((TraitAEffets) trait);
    };
}
