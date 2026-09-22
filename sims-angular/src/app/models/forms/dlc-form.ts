import { FormControl, FormGroup } from '@angular/forms';
import { TypeDlcDTO } from '../dlc/type-dlc-dto';

export interface DlcForm {
  id: FormControl<number | null>;
  nom: FormControl<string | null>;
  dateSortie: FormControl<Date | null>;
  description: FormControl<string | null>;
  img: FormControl<string | null>;
  type: FormControl<TypeDlcDTO | null>;
}

export type DlcFormGroup = FormGroup<DlcForm>;
