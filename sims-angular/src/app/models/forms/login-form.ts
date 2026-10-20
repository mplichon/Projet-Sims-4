import { FormControl, FormGroup } from '@angular/forms';

export interface LoginForm {
  username: FormControl<string | null>;
  password: FormControl<string | null>;
}

export type LoginFormGroup = FormGroup<LoginForm>;
