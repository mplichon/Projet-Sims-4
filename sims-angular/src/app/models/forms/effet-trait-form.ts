import { FormControl, FormGroup } from '@angular/forms';

export interface EffetTraitForm {
  effet: FormControl<string | null>;
}

export type EffetTraitFormGroup = FormGroup<EffetTraitForm>;
