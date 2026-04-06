import { DlcLegerDTO } from '../dlc/dlc-leger-dto';
import { TraitLegerDTO } from '../trait/trait-leger-dto';
import { RequeteCreationModificationEtapeAspirationDTO } from './requete-creation-modification-etape-aspiration-dto';
import { TypeAspirationDTO } from './type-aspiration-dto';

export interface RequeteCreationModificationAspirationDTO {
  id?: number;
  nom: string;
  description: string;
  img: string;
  type: TypeAspirationDTO;
  dlc?: DlcLegerDTO;
  trait?: TraitLegerDTO;
  etapes: RequeteCreationModificationEtapeAspirationDTO[];
}
