package sims.manager;

import sims.dto.trait.ReponseCreationTraitDTO;
import sims.dto.trait.ReponseModificationTraitDTO;
import sims.dto.trait.RequeteCreationTraitDTO;
import sims.dto.trait.RequeteModificationTraitDTO;
import sims.dto.trait.TypeTraitDTO;

public interface TraitManager {

    boolean canManage(TypeTraitDTO typeDTO);

    ReponseCreationTraitDTO addTrait(RequeteCreationTraitDTO requeteCreationDTO);

    ReponseModificationTraitDTO updateTrait(Integer id, RequeteModificationTraitDTO requeteModificationDTO);

    ReponseModificationTraitDTO getTraitById(Integer id);
}
