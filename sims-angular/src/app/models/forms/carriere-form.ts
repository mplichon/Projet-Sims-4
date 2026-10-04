import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { DlcLegerDTO } from '../dlc/dlc-leger-dto';
import { TypeCarriereDTO } from '../carriere/type-carriere-dto';
import { RangCarriereFormGroup } from './rang-carriere-form';
import { BrancheCarriereFormGroup } from './branche-carriere-form';

export interface CarriereForm {
  id: FormControl<number | null>;
  nom: FormControl<string | null>;
  description: FormControl<string | null>;
  img: FormControl<string | null>;
  type: FormControl<TypeCarriereDTO | null>;
  dlc: FormControl<DlcLegerDTO | null>;
  rangs: FormArray<RangCarriereFormGroup>;
  hasBranches: FormControl<boolean | null>;
  branches: FormArray<BrancheCarriereFormGroup>;
}

export type CarriereFormGroup = FormGroup<CarriereForm>;
