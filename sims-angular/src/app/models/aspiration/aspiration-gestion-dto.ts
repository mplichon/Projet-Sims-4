import { DlcLegerDTO } from '../dlc/dlc-leger-dto';
import { TraitLegerDTO } from '../trait/trait-leger-dto';
import { EtapeAspirationGestionDTO } from './etape-aspiration-gestion-dto';
import { TypeAspirationDTO } from './type-aspiration-dto';

export interface AspirationGestionDTO {
  id: number | null;
  nom: string;
  description: string;
  img: string;
  type: TypeAspirationDTO;
  dlc: DlcLegerDTO;
  trait: TraitLegerDTO;
  etapes: EtapeAspirationGestionDTO[];
}
