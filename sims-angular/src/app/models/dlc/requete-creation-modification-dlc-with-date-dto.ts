import { TypeDlcDTO } from './type-dlc-dto';

export interface RequeteCreationModificationDlcWithDateDTO {
  id?: number;
  nom: string;
  dateSortie?: Date;
  description: string;
  img: string;
  type: TypeDlcDTO;
}
