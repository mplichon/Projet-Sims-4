import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ExigencePourPromotionFormGroup } from './exigence-pour-promotion-form';

export interface RangCarriereForm {
  id: FormControl<number | null>;
  numero: FormControl<number | null>;
  titre: FormControl<string | null>;
  salaire: FormControl<number | null>;
  tacheDuJour: FormControl<string | null>;
  exigencesPourPromotion: FormArray<ExigencePourPromotionFormGroup>;
}

export type RangCarriereFormGroup = FormGroup<RangCarriereForm>;
