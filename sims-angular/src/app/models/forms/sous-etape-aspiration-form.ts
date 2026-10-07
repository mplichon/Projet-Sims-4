import { FormControl, FormGroup } from '@angular/forms';

export interface SousEtapeAspirationForm {
  sousEtape: FormControl<string | null>;
}

export type SousEtapeAspirationFormGroup = FormGroup<SousEtapeAspirationForm>;
