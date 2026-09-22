import { Injectable } from '@angular/core';
import { DlcForm, DlcFormGroup } from '../../models/forms/dlc-form';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TypeDlcDTO } from '../../models/dlc/type-dlc-dto';
import { RequeteCreationModificationDlcWithDateDTO } from '../../models/dlc/requete-creation-modification-dlc-with-date-dto';
import { RequeteCreationModificationDlcDTO } from '../../models/dlc/requete-creation-modification-dlc-dto';

@Injectable({
  providedIn: 'root',
})
export class DlcFormService {
  buildFormGroup(): DlcFormGroup {
    return new FormGroup<DlcForm>({
      id: new FormControl<number | null>(null),
      nom: new FormControl<string | null>(null, Validators.required),
      dateSortie: new FormControl<Date | null>(null, Validators.required),
      description: new FormControl<string | null>(null, Validators.required),
      img: new FormControl<string | null>(null),
      type: new FormControl<TypeDlcDTO | null>(null, Validators.required),
    });
  }

  updateFormGroup(formGroup: DlcFormGroup, dlc: RequeteCreationModificationDlcWithDateDTO) {
    formGroup.patchValue({
      id: dlc.id,
      nom: dlc.nom,
      dateSortie: dlc.dateSortie,
      description: dlc.description,
      img: dlc.img,
      type: dlc.type,
    });
  }

  resetFormGroup(formGroup: DlcFormGroup) {
    formGroup.patchValue({
      id: null,
      nom: null,
      dateSortie: null,
      description: null,
      img: null,
      type: null,
    });
    formGroup.markAsUntouched();
    formGroup.markAsPristine();
  }

  mapFormToRequest(formGroup: DlcFormGroup): RequeteCreationModificationDlcDTO {
    return {
      id: formGroup.controls.id.value ?? undefined,
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
