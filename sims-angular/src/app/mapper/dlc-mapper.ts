import { Injectable } from '@angular/core';
import { RequeteCreationModificationDlcDTO } from '../models/dlc/requete-creation-modification-dlc-dto';
import { RequeteCreationModificationDlcWithDateDTO } from '../models/dlc/requete-creation-modification-dlc-with-date-dto';

@Injectable({
  providedIn: 'root',
})
export class DlcMapper {
  toRequeteCreationModificationDlcWithDateDTO(
    dlcWithoutDateType: RequeteCreationModificationDlcDTO,
  ): RequeteCreationModificationDlcWithDateDTO {
    return {
      ...dlcWithoutDateType,
      dateSortie: new Date(dlcWithoutDateType.dateSortie),
    };
  }

  toRequeteCreationModificationDlcDTO(
    dlcWithDateType: RequeteCreationModificationDlcWithDateDTO,
  ): RequeteCreationModificationDlcDTO {
    return {
      ...dlcWithDateType,
      dateSortie: this.formatDate(dlcWithDateType.dateSortie),
    };
  }

  private formatDate(date: Date | undefined): string {
    if (date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');

      return `${year}-${month}-${day}`;
    }
    return '';
  }
}
