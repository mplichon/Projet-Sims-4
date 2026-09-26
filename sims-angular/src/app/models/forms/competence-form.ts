import { FormControl, FormGroup } from '@angular/forms';
import { CategorieSimDTO } from '../categorie-sim-dto';
import { DlcLegerDTO } from '../dlc/dlc-leger-dto';

export interface CompetenceForm {
  id: FormControl<number | null | undefined>;
  nom: FormControl<string | null>;
  description: FormControl<string | null>;
  img: FormControl<string | null>;
  niveauMax: FormControl<number | null>;
  categorieSim: FormControl<CategorieSimDTO | null>;
  dlc: FormControl<DlcLegerDTO | null | undefined>;
}

export type CompetenceFormGroup = FormGroup<CompetenceForm>;
