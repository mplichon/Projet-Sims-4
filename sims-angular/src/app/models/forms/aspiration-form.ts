import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { TypeAspirationDTO } from '../aspiration/type-aspiration-dto';
import { DlcLegerDTO } from '../dlc/dlc-leger-dto';
import { TraitLegerDTO } from '../trait/trait-leger-dto';
import { EtapeAspirationFormGroup } from './etape-aspiration-form';

export interface AspirationForm {
  id: FormControl<number | null>;
  nom: FormControl<string | null>;
  description: FormControl<string | null>;
  img: FormControl<string | null>;
  type: FormControl<TypeAspirationDTO | null>;
  dlc: FormControl<DlcLegerDTO | null>;
  trait: FormControl<TraitLegerDTO | null>;
  etapes: FormArray<EtapeAspirationFormGroup>;
}

export type AspirationFormGroup = FormGroup<AspirationForm>;
