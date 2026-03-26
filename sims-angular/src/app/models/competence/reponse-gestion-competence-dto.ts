import { CategorieSimDTO } from '../categorie-sim-dto';
import { DlcLegerDTO } from '../dlc/dlc-leger-dto';

export interface ReponseGestionCompetenceDTO {
  id: number;
  nom: string;
  description: string;
  img: string;
  niveauMax: number;
  categorieSim: CategorieSimDTO;
  dlc: DlcLegerDTO;
}
