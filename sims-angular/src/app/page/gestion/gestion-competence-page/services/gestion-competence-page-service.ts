import { inject, Injectable } from '@angular/core';
import { CompetenceForm, CompetenceFormGroup } from '../../../../models/forms/competence-form';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategorieSimDTO } from '../../../../models/categorie-sim-dto';
import { DlcLegerDTO } from '../../../../models/dlc/dlc-leger-dto';
import { CompetenceService } from '../../../../services/competence-service';
import { Observable } from 'rxjs';
import { CompetenceGestionDTO } from '../../../../models/competence/competence-gestion-dto';

@Injectable({
  providedIn: 'root',
})
export class GestionCompetencePageService {
  private readonly competenceService = inject(CompetenceService);

  buildFormGroup(competence: CompetenceGestionDTO): CompetenceFormGroup {
    return new FormGroup<CompetenceForm>({
      id: new FormControl<number | null>({ value: competence?.id, disabled: true }),
      nom: new FormControl<string | null>(competence?.nom, Validators.required),
      description: new FormControl<string | null>(competence?.description, Validators.required),
      img: new FormControl<string | null>(competence?.img),
      niveauMax: new FormControl<number | null>(competence?.niveauMax, [
        Validators.required,
        Validators.min(0),
      ]),
      categorieSim: new FormControl<CategorieSimDTO | null>(
        competence?.categorieSim,
        Validators.required,
      ),
      dlc: new FormControl<DlcLegerDTO | null>(competence?.dlc, Validators.required),
    });
  }

  updateCompetence(formGroup: CompetenceFormGroup): Observable<CompetenceGestionDTO> {
    const requeteDTO: CompetenceGestionDTO = this._buildCompetenceGestionDTO(formGroup);

    return this.competenceService.saveCompetenceGestion(requeteDTO);
  }

  deleteCompetence(id: number): Observable<void> {
    return this.competenceService.deleteCompetenceById(id);
  }

  private _buildCompetenceGestionDTO(formGroup: CompetenceFormGroup): CompetenceGestionDTO {
    return {
      id: formGroup.controls.id.value ?? null,
      nom: formGroup.controls.nom.value ?? '',
      description: formGroup.controls.description.value ?? '',
      img: formGroup.controls.img.value ?? '',
      niveauMax: formGroup.controls.niveauMax.value ?? 0,
      categorieSim: formGroup.controls.categorieSim.value ?? { code: '', nom: '' },
      dlc: formGroup.controls.dlc.value ?? { id: 0, nom: '', img: '' },
    };
  }
}
