import { DlcLegerDTO } from '../dlc/dlc-leger-dto';
import { TraitLegerDTO } from '../trait/trait-leger-dto';
import { ReponseGestionEtapeAspirationDTO } from './reponse-gestion-etape-aspiration-dto';
import { TypeAspirationDTO } from './type-aspiration-dto';

export interface ReponseGestionAspirationDTO {
  id: number;
  nom: string;
  description: string;
  img: string;
  type: TypeAspirationDTO;
  dlc?: DlcLegerDTO;
  trait?: TraitLegerDTO;
  etapes: ReponseGestionEtapeAspirationDTO[];
}
