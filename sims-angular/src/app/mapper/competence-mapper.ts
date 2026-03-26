import { Injectable } from '@angular/core';
import { ReponseGestionCompetenceDTO } from '../models/competence/reponse-gestion-competence-dto';
import { RequeteCreationModificationCompetenceDTO } from '../models/competence/requete-creation-modification-competence-dto';

@Injectable({
  providedIn: 'root',
})
export class CompetenceMapper {
  toRequeteCreationModificationCompetenceDTO(
    reponseCompetenceDTO: ReponseGestionCompetenceDTO,
  ): RequeteCreationModificationCompetenceDTO {
    return { ...reponseCompetenceDTO };
  }
}
