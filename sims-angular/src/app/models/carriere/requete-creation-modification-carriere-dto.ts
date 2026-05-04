import { DlcLegerDTO } from '../dlc/dlc-leger-dto';
import { RequeteCreationModificationBrancheCarriereDTO } from './requete-creation-modification-branche-carriere-dto';
import { RequeteCreationModificationRangCarriereDTO } from './requete-creation-modification-rang-carriere-dto';
import { TypeCarriereDTO } from './type-carriere-dto';

export interface RequeteCreationModificationCarriereDTO {
  id?: number;
  nom: string;
  description: string;
  img: string;
  type: TypeCarriereDTO;
  dlc?: DlcLegerDTO;
  rangs: RequeteCreationModificationRangCarriereDTO[];
  branches: RequeteCreationModificationBrancheCarriereDTO[];
}
