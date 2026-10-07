import { DlcLegerDTO } from '../dlc/dlc-leger-dto';
import { BrancheCarriereGestionDTO } from './branche-carriere-gestion-dto';
import { RangCarriereGestionDTO } from './rang-carriere-gestion-dto';
import { TypeCarriereDTO } from './type-carriere-dto';

export interface CarriereGestionDTO {
  id: number | null;
  nom: string;
  description: string;
  img: string;
  type: TypeCarriereDTO;
  dlc: DlcLegerDTO;
  rangs: RangCarriereGestionDTO[];
  branches: BrancheCarriereGestionDTO[];
}
