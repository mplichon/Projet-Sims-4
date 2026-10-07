import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { TypeAspirationDTO } from '../aspiration/type-aspiration-dto';
import { DlcLegerDTO } from '../dlc/dlc-leger-dto';
import { TypeTraitDTO } from '../trait/type-trait-dto';
import { CategorieSimDTO } from '../categorie-sim-dto';
import { AspirationLegerDTO } from '../aspiration/aspiration-leger-dto';
import { EffetTraitFormGroup } from './effet-trait-form';

export interface TraitForm {
  id: FormControl<number | null>;
  nom: FormControl<string | null>;
  description: FormControl<string | null>;
  img: FormControl<string | null>;
  type: FormControl<TypeTraitDTO | null>;
  categorieSim: FormControl<CategorieSimDTO | null>;
  dlc: FormControl<DlcLegerDTO | null>;

  cout: FormControl<number | null>;
  qualite: FormControl<string | null>;
  condition: FormControl<string | null>;
  effets: FormArray<EffetTraitFormGroup>;
  typeAspiration: FormControl<TypeAspirationDTO | null>;
  aspiration: FormControl<AspirationLegerDTO | null>;
}

export type TraitFormGroup = FormGroup<TraitForm>;
