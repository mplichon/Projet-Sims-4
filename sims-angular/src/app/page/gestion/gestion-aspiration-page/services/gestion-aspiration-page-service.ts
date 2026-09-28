import { inject, Injectable } from '@angular/core';
import { AspirationService } from '../../../../services/aspiration-service';
import { Observable } from 'rxjs';
import { AspirationForm, AspirationFormGroup } from '../../../../models/forms/aspiration-form';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { TypeAspirationDTO } from '../../../../models/aspiration/type-aspiration-dto';
import { DlcLegerDTO } from '../../../../models/dlc/dlc-leger-dto';
import { TraitLegerDTO } from '../../../../models/trait/trait-leger-dto';
import {
  EtapeAspirationForm,
  EtapeAspirationFormGroup,
} from '../../../../models/forms/etape-aspiration-form';
import {
  SousEtapeAspirationForm,
  SousEtapeAspirationFormGroup,
} from '../../../../models/forms/sous-etape-aspiration-form';
import { ReponseGestionAspirationDTO } from '../../../../models/aspiration/reponse-gestion-aspiration-dto';
import { AspirationGestionDTO } from '../../../../models/aspiration/aspiration-gestion-dto';
import { EtapeAspirationGestionDTO } from '../../../../models/aspiration/etape-aspiration-gestion-dto';

@Injectable({
  providedIn: 'root',
})
export class GestionAspirationPageService {
  private readonly aspirationService = inject(AspirationService);

  // TODO: gérer le cas null
  buildAspirationFormGroup(aspiration: AspirationGestionDTO): AspirationFormGroup {
    const etapes: EtapeAspirationFormGroup[] = aspiration?.etapes
      ? aspiration?.etapes.map((etape) => this.buildEtapeAspirationFormGroup(etape))
      : [this.buildEmptyEtapeAspirationFormGroup()];

    return new FormGroup<AspirationForm>({
      id: new FormControl<number | null>({ value: aspiration?.id, disabled: true }),
      nom: new FormControl<string | null>(aspiration?.nom, Validators.required),
      description: new FormControl<string | null>(aspiration?.description, Validators.required),
      img: new FormControl<string | null>(aspiration?.img),
      type: new FormControl<TypeAspirationDTO | null>(aspiration?.type, Validators.required),
      dlc: new FormControl<DlcLegerDTO | null>(aspiration?.dlc, Validators.required),
      trait: new FormControl<TraitLegerDTO | null>(aspiration?.trait, Validators.required),
      etapes: new FormArray<EtapeAspirationFormGroup>(etapes),
    });
  }

  buildEtapeAspirationFormGroup(etape: EtapeAspirationGestionDTO): EtapeAspirationFormGroup {
    const sousEtapes: SousEtapeAspirationFormGroup[] = etape?.sousEtapes
      ? etape?.sousEtapes.map((sousEtape) => this.buildSousEtapeAspirationFormGroup(sousEtape))
      : [this.buildEmptySousEtapeAspirationFormGroup()];

    return new FormGroup<EtapeAspirationForm>({
      id: new FormControl<number | null>({ value: etape?.id, disabled: true }),
      numero: new FormControl<number | null>(etape?.numero, Validators.required),
      nom: new FormControl<string | null>(etape?.nom, Validators.required),
      sousEtapes: new FormArray<SousEtapeAspirationFormGroup>(sousEtapes),
    });
  }

  buildEmptyEtapeAspirationFormGroup(): EtapeAspirationFormGroup {
    const sousEtape: SousEtapeAspirationFormGroup = this.buildEmptySousEtapeAspirationFormGroup();

    return new FormGroup<EtapeAspirationForm>({
      id: new FormControl<number | null>({ value: null, disabled: true }),
      numero: new FormControl<number | null>(null, Validators.required),
      nom: new FormControl<string | null>(null, Validators.required),
      sousEtapes: new FormArray<SousEtapeAspirationFormGroup>([sousEtape]),
    });
  }

  buildSousEtapeAspirationFormGroup(sousEtape: string): SousEtapeAspirationFormGroup {
    return new FormGroup<SousEtapeAspirationForm>({
      sousEtape: new FormControl<string | null>(sousEtape, Validators.required),
    });
  }

  buildEmptySousEtapeAspirationFormGroup(): SousEtapeAspirationFormGroup {
    return new FormGroup<SousEtapeAspirationForm>({
      sousEtape: new FormControl<string | null>(null, Validators.required),
    });
  }

  getAspiration(id: number): Observable<ReponseGestionAspirationDTO | null> {
    return this.aspirationService.getAspirationGestionById(id);
  }

  updateAspiration(formGroup: AspirationFormGroup): Observable<AspirationGestionDTO> {
    const requeteDTO: AspirationGestionDTO =
      this._buildRequeteCreationModificationAspirationDTO(formGroup);

    return this.aspirationService.saveAspirationGestionV2(requeteDTO);
  }

  deleteAspiration(id: number): Observable<void> {
    return this.aspirationService.deleteAspirationByIdV2(id);
  }

  private _buildRequeteCreationModificationAspirationDTO(
    formGroup: AspirationFormGroup,
  ): AspirationGestionDTO {
    const etapesFormArray: FormArray<EtapeAspirationFormGroup> = formGroup.controls.etapes;
    const etapes: EtapeAspirationGestionDTO[] = etapesFormArray.controls.map((etapeFormGroup) =>
      this._buildRequeteCreationModificationEtapeAspirationDTO(etapeFormGroup),
    );

    return {
      id: formGroup.controls.id.value,
      nom: formGroup.controls.nom.value ?? '',
      description: formGroup.controls.description.value ?? '',
      img: formGroup.controls.img.value ?? '',
      type: formGroup.controls.type.value ?? { code: '', nom: '', img: '' },
      dlc: formGroup.controls.dlc.value ?? { id: 0, nom: '', img: '' },
      trait: formGroup.controls.trait.value ?? { id: 0, nom: '', img: '' },
      etapes: etapes,
    };
  }

  private _buildRequeteCreationModificationEtapeAspirationDTO(
    formGroup: EtapeAspirationFormGroup,
  ): EtapeAspirationGestionDTO {
    const sousEtapesFormArray: FormArray<SousEtapeAspirationFormGroup> =
      formGroup.controls.sousEtapes;
    const sousEtapes: string[] = sousEtapesFormArray.controls.map(
      (sousEtapeFormGroup) => sousEtapeFormGroup.controls.sousEtape.value ?? '',
    );

    return {
      id: formGroup.controls.id.value,
      numero: formGroup.controls.numero.value ?? 0,
      nom: formGroup.controls.nom.value ?? '',
      sousEtapes: sousEtapes,
    };
  }
}
