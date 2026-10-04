import { FormControl, FormGroup } from '@angular/forms';

export interface ExigencePourPromotionForm {
  exigencePourPromotion: FormControl<string | null>;
}

export type ExigencePourPromotionFormGroup = FormGroup<ExigencePourPromotionForm>;
