import { inject, Injectable } from '@angular/core';
import { DlcForm, DlcFormGroup } from '../../../../models/forms/dlc-form';
import { DlcService } from '../../../../services/dlc/dlc-service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TypeDlcDTO } from '../../../../models/dlc/type-dlc-dto';
import { Observable } from 'rxjs';
import { DlcGestionDTO } from '../../../../models/dlc/dlc-gestion-dto';

@Injectable({
  providedIn: 'root',
})
export class GestionDlcPageService {
  private readonly dlcService = inject(DlcService);

  buildFormGroup(dlc: DlcGestionDTO): DlcFormGroup {
    const dateSortie: Date | null = dlc?.dateSortie ? new Date(dlc?.dateSortie) : null;

    return new FormGroup<DlcForm>({
      id: new FormControl<number | null>({ value: dlc?.id, disabled: true }),
      nom: new FormControl<string | null>(dlc?.nom, Validators.required),
      dateSortie: new FormControl<Date | null>(dateSortie, Validators.required),
      description: new FormControl<string | null>(dlc?.description, Validators.required),
      img: new FormControl<string | null>(dlc?.img),
      type: new FormControl<TypeDlcDTO | null>(dlc?.type, Validators.required),
    });
  }

  updateDlc(formGroup: DlcFormGroup): Observable<DlcGestionDTO> {
    const requeteDTO: DlcGestionDTO = this._buildRequeteCreationModificationDlcDTO(formGroup);

    return this.dlcService.saveDlcGestion(requeteDTO);
  }

  deleteDlc(dlcId: number): Observable<void> {
    return this.dlcService.deleteDlcById(dlcId);
  }

  private _buildRequeteCreationModificationDlcDTO(formGroup: DlcFormGroup): DlcGestionDTO {
    return {
      id: formGroup.controls.id.value ?? null,
      nom: formGroup.controls.nom.value ?? '',
      dateSortie: this.formatDate(formGroup.controls.dateSortie.value),
      description: formGroup.controls.description.value ?? '',
      img: formGroup.controls.img.value ?? '',
      type: formGroup.controls.type.value ?? { code: '', nom: '', couleur: '' },
    };
  }

  private formatDate(date: Date | null): string {
    if (date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');

      return `${year}-${month}-${day}`;
    }
    return '';
  }
}
