import { RequeteCreationModificationRangCarriereDTO } from './requete-creation-modification-rang-carriere-dto';

export interface RequeteCreationModificationBrancheCarriereDTO {
  id?: number;
  nom: string;
  description: string;
  img: string;
  rangs: RequeteCreationModificationRangCarriereDTO[];
}
