import { CategorieSimDTO } from '../categorie-sim-dto';
import { DlcLegerDTO } from '../dlc/dlc-leger-dto';

export interface ReponseListeGestionCompetenceDTO {
  id: number;
  nom: string;
  description: string;
  img: string;
  categorieSim: CategorieSimDTO;
  dlc: DlcLegerDTO;
}
