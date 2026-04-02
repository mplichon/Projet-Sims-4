import { Injectable } from '@angular/core';
import { ReponseModificationTraitDTO } from '../models/trait/reponse-modification-trait-dto';
import { RequeteCreationModificationTraitDTO } from '../models/trait/requete-creation-modification-trait-dto';

@Injectable({
  providedIn: 'root',
})
export class TraitMapper {
  toRequeteCreationModificationTraitDTO(
    reponseTraitDTO: ReponseModificationTraitDTO,
  ): RequeteCreationModificationTraitDTO {
    return { ...reponseTraitDTO };
  }
}
