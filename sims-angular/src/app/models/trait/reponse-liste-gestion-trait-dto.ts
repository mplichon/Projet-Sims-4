import { CategorieSimDTO } from '../categorie-sim-dto';
import { DlcLegerDTO } from '../dlc/dlc-leger-dto';
import { TypeTraitDTO } from './type-trait-dto';

export interface ReponseListeGestionTraitDTO {
  id: number;
  nom: string;
  description: string;
  img: string;
  type: TypeTraitDTO;
  categorieSim: CategorieSimDTO;
  dlc: DlcLegerDTO;
}
