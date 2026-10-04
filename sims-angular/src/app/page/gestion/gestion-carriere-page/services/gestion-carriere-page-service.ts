import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarriereService } from '../../../../services/carriere-service';
import { CarriereForm, CarriereFormGroup } from '../../../../models/forms/carriere-form';
import { CarriereGestionDTO } from '../../../../models/carriere/carriere-gestion-dto';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { TypeCarriereDTO } from '../../../../models/carriere/type-carriere-dto';
import { DlcLegerDTO } from '../../../../models/dlc/dlc-leger-dto';
import {
  RangCarriereForm,
  RangCarriereFormGroup,
} from '../../../../models/forms/rang-carriere-form';
import {
  BrancheCarriereForm,
  BrancheCarriereFormGroup,
} from '../../../../models/forms/branche-carriere-form';
import { BrancheCarriereGestionDTO } from '../../../../models/carriere/branche-carriere-gestion-dto';
import { RangCarriereGestionDTO } from '../../../../models/carriere/rang-carriere-gestion-dto';
import {
  ExigencePourPromotionForm,
  ExigencePourPromotionFormGroup,
} from '../../../../models/forms/exigence-pour-promotion-form';

@Injectable({
  providedIn: 'root',
})
export class GestionCarrierePageService {
  private readonly carriereService = inject(CarriereService);

  buildCarriereFormGroup(carriere: CarriereGestionDTO): CarriereFormGroup {
    const rangs: RangCarriereFormGroup[] =
      carriere?.rangs?.length > 0
        ? carriere?.rangs.map((rang) => this.buildRangCarriereFormGroup(rang))
        : [this.buildEmptyRangCarriereFormGroup()];

    // Si la carrière n'a pas de branches, on en crée 2 vides
    const branches: BrancheCarriereFormGroup[] =
      carriere?.branches?.length > 0
        ? carriere?.branches.map((branche) => this.buildBrancheCarriereFormGroup(branche))
        : [this.buildEmptyBrancheCarriereFormGroup(), this.buildEmptyBrancheCarriereFormGroup()];

    return new FormGroup<CarriereForm>({
      id: new FormControl<number | null>({ value: carriere?.id, disabled: true }),
      nom: new FormControl<string | null>(carriere?.nom, Validators.required),
      description: new FormControl<string | null>(carriere?.description, Validators.required),
      img: new FormControl<string | null>(carriere?.img),
      type: new FormControl<TypeCarriereDTO | null>(carriere?.type, Validators.required),
      dlc: new FormControl<DlcLegerDTO | null>(carriere?.dlc, Validators.required),
      rangs: new FormArray<RangCarriereFormGroup>(rangs),
      // Pour calculer hasBranches, on prend en compte uniquement les branches de la carrière, pas celle du formulaire
      hasBranches: new FormControl<boolean | null>(carriere?.branches?.length > 0),
      branches: new FormArray<BrancheCarriereFormGroup>(branches),
    });
  }

  buildBrancheCarriereFormGroup(branche: BrancheCarriereGestionDTO): BrancheCarriereFormGroup {
    const rangs: RangCarriereFormGroup[] = branche?.rangs
      ? branche?.rangs.map((rang) => this.buildRangCarriereFormGroup(rang))
      : [this.buildEmptyRangCarriereFormGroup()];

    return new FormGroup<BrancheCarriereForm>({
      id: new FormControl<number | null>({ value: branche?.id, disabled: true }),
      nom: new FormControl<string | null>(branche?.nom, Validators.required),
      description: new FormControl<string | null>(branche?.description, Validators.required),
      img: new FormControl<string | null>(branche?.img),
      rangs: new FormArray<RangCarriereFormGroup>(rangs),
    });
  }

  buildEmptyBrancheCarriereFormGroup(): BrancheCarriereFormGroup {
    const rang: RangCarriereFormGroup = this.buildEmptyRangCarriereFormGroup();

    return new FormGroup<BrancheCarriereForm>({
      id: new FormControl<number | null>({ value: null, disabled: true }),
      nom: new FormControl<string | null>(null, Validators.required),
      description: new FormControl<string | null>(null, Validators.required),
      img: new FormControl<string | null>(null),
      rangs: new FormArray<RangCarriereFormGroup>([rang]),
    });
  }

  buildRangCarriereFormGroup(rang: RangCarriereGestionDTO): RangCarriereFormGroup {
    const exigences: ExigencePourPromotionFormGroup[] = rang?.exigencesPourPromotion
      ? rang?.exigencesPourPromotion.map((exigence) =>
          this.buildExigencePourPromotionFormGroup(exigence),
        )
      : [this.buildEmptyExigencePourPromotionFormGroup()];

    return new FormGroup<RangCarriereForm>({
      id: new FormControl<number | null>({ value: rang?.id, disabled: true }),
      numero: new FormControl<number | null>(rang?.numero),
      titre: new FormControl<string | null>(rang?.titre, Validators.required),
      salaire: new FormControl<number | null>(rang?.salaire, Validators.required),
      tacheDuJour: new FormControl<string | null>(rang?.tacheDuJour, Validators.required),
      exigencesPourPromotion: new FormArray<ExigencePourPromotionFormGroup>(exigences),
    });
  }

  buildEmptyRangCarriereFormGroup(): RangCarriereFormGroup {
    const exigence: ExigencePourPromotionFormGroup =
      this.buildEmptyExigencePourPromotionFormGroup();

    return new FormGroup<RangCarriereForm>({
      id: new FormControl<number | null>({ value: null, disabled: true }),
      numero: new FormControl<number | null>(null),
      titre: new FormControl<string | null>(null, Validators.required),
      salaire: new FormControl<number | null>(null, Validators.required),
      tacheDuJour: new FormControl<string | null>(null, Validators.required),
      exigencesPourPromotion: new FormArray<ExigencePourPromotionFormGroup>([exigence]),
    });
  }

  buildExigencePourPromotionFormGroup(exigence: string): ExigencePourPromotionFormGroup {
    return new FormGroup<ExigencePourPromotionForm>({
      exigencePourPromotion: new FormControl<string | null>(exigence),
    });
  }

  buildEmptyExigencePourPromotionFormGroup(): ExigencePourPromotionFormGroup {
    return new FormGroup<ExigencePourPromotionForm>({
      exigencePourPromotion: new FormControl<string | null>(null),
    });
  }

  patchBranchesDisable(
    formArray: FormArray<BrancheCarriereFormGroup>,
    hasBranches: boolean | null,
  ) {
    if (hasBranches) {
      formArray?.controls?.map((brancheFormGroup) => brancheFormGroup.enable());
    } else {
      formArray?.controls?.map((brancheFormGroup) => brancheFormGroup.disable());
    }
  }

  updateCarriere(formGroup: CarriereFormGroup): Observable<CarriereGestionDTO> {
    const requeteDTO: CarriereGestionDTO = this._buildCarriereGestionDTO(formGroup);

    return this.carriereService.saveCarriereGestionV2(requeteDTO);
  }

  deleteCarriere(id: number): Observable<void> {
    return this.carriereService.deleteCarriereByIdV2(id);
  }

  private _buildCarriereGestionDTO(formGroup: CarriereFormGroup): CarriereGestionDTO {
    const hasBranches: boolean = formGroup.controls.hasBranches.value ?? false;

    const rangsFormArray: FormArray<RangCarriereFormGroup> = formGroup.controls.rangs;
    const rangs: RangCarriereGestionDTO[] = rangsFormArray.controls.map((rangFormArray, index) =>
      this._buildRangCarriereGestionDTO(rangFormArray, index),
    );

    const branchesFormArray: FormArray<BrancheCarriereFormGroup> = formGroup.controls.branches;
    const branches: BrancheCarriereGestionDTO[] = hasBranches
      ? branchesFormArray.controls.map((brancheFormArray) =>
          this._buildBrancheGestionDTO(brancheFormArray),
        )
      : [];

    return {
      id: formGroup.controls.id.value,
      nom: formGroup.controls.nom.value ?? '',
      description: formGroup.controls.description.value ?? '',
      img: formGroup.controls.img.value ?? '',
      type: formGroup.controls.type.value ?? { code: '', nom: '' },
      dlc: formGroup.controls.dlc.value ?? { id: 0, nom: '', img: '' },
      rangs: rangs,
      branches: branches,
    };
  }

  private _buildBrancheGestionDTO(formGroup: BrancheCarriereFormGroup): BrancheCarriereGestionDTO {
    const rangsFormArray: FormArray<RangCarriereFormGroup> = formGroup.controls.rangs;
    const rangs: RangCarriereGestionDTO[] = rangsFormArray.controls.map((rangFormArray, index) =>
      this._buildRangCarriereGestionDTO(rangFormArray, index),
    );

    return {
      id: formGroup.controls.id.value,
      nom: formGroup.controls.nom.value ?? '',
      description: formGroup.controls.description.value ?? '',
      img: formGroup.controls.img.value ?? '',
      rangs: rangs,
    };
  }

  private _buildRangCarriereGestionDTO(
    formGroup: RangCarriereFormGroup,
    index: number,
  ): RangCarriereGestionDTO {
    const exigencesFormArray: FormArray<ExigencePourPromotionFormGroup> =
      formGroup.controls.exigencesPourPromotion;
    const exigences: string[] = exigencesFormArray.controls.map(
      (exigenceFormGroup) => exigenceFormGroup.controls.exigencePourPromotion.value ?? '',
    );

    return {
      id: formGroup.controls.id.value,
      numero: index + 1,
      titre: formGroup.controls.titre.value ?? '',
      salaire: formGroup.controls.salaire.value ?? 0,
      tacheDuJour: formGroup.controls.tacheDuJour.value ?? '',
      exigencesPourPromotion: exigences,
    };
  }
}
