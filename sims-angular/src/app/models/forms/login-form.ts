import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { TypeAspirationDTO } from '../aspiration/type-aspiration-dto';
import { DlcLegerDTO } from '../dlc/dlc-leger-dto';
import { TraitLegerDTO } from '../trait/trait-leger-dto';
import { EtapeAspirationFormGroup } from './etape-aspiration-form';

export interface LoginForm {
  username: FormControl<string | null>;
  password: FormControl<string | null>;
}

export type LoginFormGroup = FormGroup<LoginForm>;
