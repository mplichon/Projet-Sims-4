package sims.manager;

import sims.dto.trait.TraitGestionDTO;
import sims.dto.trait.TypeTraitDTO;
import sims.model.TraitDeCaractere;

public interface TraitManager {

    boolean canManage(TypeTraitDTO typeDTO);

    TraitGestionDTO addTrait(TraitGestionDTO requeteCreationDTO);

    TraitGestionDTO updateTrait(Integer id, TraitGestionDTO requeteModificationDTO);

    TraitGestionDTO getTraitById(Integer id);

    TraitGestionDTO toTraitGestionDTO(TraitDeCaractere trait);
}
