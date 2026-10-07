import { AspirationLegerDTO } from '../aspiration/aspiration-leger-dto';
import { TypeAspirationDTO } from '../aspiration/type-aspiration-dto';
import { CategorieSimDTO } from '../categorie-sim-dto';
import { DlcLegerDTO } from '../dlc/dlc-leger-dto';
import { TypeTraitDTO } from './type-trait-dto';

export interface TraitGestionDTO {
  id: number | null;
  nom: string;
  description: string;
  img: string;
  type: TypeTraitDTO;
  categorieSim: CategorieSimDTO;
  dlc: DlcLegerDTO;

  cout: number | null;
  qualite: string | null;
  condition: string | null;
  effets: string[];
  typeAspiration: TypeAspirationDTO | null;
  aspiration: AspirationLegerDTO | null;
}
