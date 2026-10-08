import { FormControl, FormGroup } from '@angular/forms';

export interface RegisterForm {
  username: FormControl<string | null>;
  password: FormControl<string | null>;
  confirmationPassword: FormControl<string | null>;
}

export type RegisterFormGroup = FormGroup<RegisterForm>;
