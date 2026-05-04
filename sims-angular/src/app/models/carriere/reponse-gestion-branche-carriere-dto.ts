import { ReponseGestionRangCarriereDTO } from './reponse-gestion-rang-carriere-dto';

export interface ReponseGestionBrancheCarriereDTO {
  id: number;
  nom: string;
  description: string;
  img: string;
  rangs: ReponseGestionRangCarriereDTO[];
}
