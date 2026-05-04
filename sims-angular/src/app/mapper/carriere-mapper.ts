import { Injectable } from '@angular/core';
import { ReponseGestionCarriereDTO } from '../models/carriere/reponse-gestion-carriere-dto';
import { RequeteCreationModificationCarriereDTO } from '../models/carriere/requete-creation-modification-carriere-dto';
import { ReponseGestionBrancheCarriereDTO } from '../models/carriere/reponse-gestion-branche-carriere-dto';
import { RequeteCreationModificationBrancheCarriereDTO } from '../models/carriere/requete-creation-modification-branche-carriere-dto';

@Injectable({
  providedIn: 'root',
})
export class CarriereMapper {
  public toRequeteCreationModificationCarriereDTO(
    reponseCarriereDTO: ReponseGestionCarriereDTO,
  ): RequeteCreationModificationCarriereDTO {
    return {
      ...reponseCarriereDTO,
      rangs: reponseCarriereDTO.rangs.map((rang) => ({ ...rang })),
      branches: reponseCarriereDTO.branches.map((branche) =>
        this.toRequeteCreationModificationBrancheCarriereDTO(branche),
      ),
    };
  }

  public toRequeteCreationModificationBrancheCarriereDTO(
    reponseBrancheDTO: ReponseGestionBrancheCarriereDTO,
  ): RequeteCreationModificationBrancheCarriereDTO {
    return {
      ...reponseBrancheDTO,
      rangs: reponseBrancheDTO.rangs.map((rang) => ({ ...rang })),
    };
  }
}
