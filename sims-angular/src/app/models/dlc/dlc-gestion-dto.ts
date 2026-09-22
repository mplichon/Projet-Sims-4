import { TypeDlcDTO } from './type-dlc-dto';

export interface DlcGestionDTO {
  id: number | null;
  nom: string;
  dateSortie: string;
  description: string;
  img: string;
  type: TypeDlcDTO;
}
