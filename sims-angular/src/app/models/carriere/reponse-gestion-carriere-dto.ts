import { DlcLegerDTO } from '../dlc/dlc-leger-dto';
import { ReponseGestionBrancheCarriereDTO } from './reponse-gestion-branche-carriere-dto';
import { ReponseGestionRangCarriereDTO } from './reponse-gestion-rang-carriere-dto';
import { TypeCarriereDTO } from './type-carriere-dto';

export interface ReponseGestionCarriereDTO {
  id: number;
  nom: string;
  description: string;
  img: string;
  type: TypeCarriereDTO;
  dlc?: DlcLegerDTO;
  rangs: ReponseGestionRangCarriereDTO[];
  branches: ReponseGestionBrancheCarriereDTO[];
}
