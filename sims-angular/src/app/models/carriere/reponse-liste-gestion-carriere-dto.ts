import { DlcLegerDTO } from '../dlc/dlc-leger-dto';
import { TypeCarriereDTO } from './type-carriere-dto';

export interface ReponseListeGestionCarriereDTO {
  id: number;
  nom: string;
  description: string;
  img: string;
  type: TypeCarriereDTO;
  dlc: DlcLegerDTO;
}
