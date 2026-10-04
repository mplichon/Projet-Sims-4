import { RangCarriereGestionDTO } from './rang-carriere-gestion-dto';

export interface BrancheCarriereGestionDTO {
  id: number | null;
  nom: string;
  description: string;
  img: string;
  rangs: RangCarriereGestionDTO[];
}
