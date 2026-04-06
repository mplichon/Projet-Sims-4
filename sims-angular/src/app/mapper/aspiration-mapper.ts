import { Injectable } from '@angular/core';
import { ReponseGestionAspirationDTO } from '../models/aspiration/reponse-gestion-aspiration-dto';
import { RequeteCreationModificationAspirationDTO } from '../models/aspiration/requete-creation-modification-aspiration-dto';

@Injectable({
  providedIn: 'root',
})
export class AspirationMapper {
  public toRequeteCreationModificationAspirationDTO(
    reponseAspirationDTO: ReponseGestionAspirationDTO,
  ): RequeteCreationModificationAspirationDTO {
    return {
      ...reponseAspirationDTO,
      etapes: reponseAspirationDTO.etapes.map((etape) => ({ ...etape })),
    };
  }
}
