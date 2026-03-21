import { TypeDlcDTO } from './type-dlc-dto';

export interface RequeteCreationModificationDlcDTO {
  id?: number;
  nom: string;
  dateSortie: string;
  description: string;
  img: string;
  type: TypeDlcDTO;
}
