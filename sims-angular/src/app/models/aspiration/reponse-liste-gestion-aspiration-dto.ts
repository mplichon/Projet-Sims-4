import { DlcLegerDTO } from '../dlc/dlc-leger-dto';
import { TypeAspirationDTO } from './type-aspiration-dto';

export interface ReponseListeGestionAspirationDTO {
  id: number;
  nom: string;
  description: string;
  img: string;
  type: TypeAspirationDTO;
  dlc: DlcLegerDTO;
}
