import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { RangCarriereFormGroup } from './rang-carriere-form';

export interface BrancheCarriereForm {
  id: FormControl<number | null>;
  nom: FormControl<string | null>;
  description: FormControl<string | null>;
  img: FormControl<string | null>;
  rangs: FormArray<RangCarriereFormGroup>;
}

export type BrancheCarriereFormGroup = FormGroup<BrancheCarriereForm>;
