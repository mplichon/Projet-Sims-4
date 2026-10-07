import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { SousEtapeAspirationFormGroup } from './sous-etape-aspiration-form';

export interface EtapeAspirationForm {
  id: FormControl<number | null>;
  numero: FormControl<number | null>;
  nom: FormControl<string | null>;
  sousEtapes: FormArray<SousEtapeAspirationFormGroup>;
}

export type EtapeAspirationFormGroup = FormGroup<EtapeAspirationForm>;
