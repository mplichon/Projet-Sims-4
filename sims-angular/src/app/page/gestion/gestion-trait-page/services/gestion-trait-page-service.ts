import { inject, Injectable } from '@angular/core';
import { TraitService } from '../../../../services/trait-service';
import { Observable } from 'rxjs';
import { EffetTraitForm, EffetTraitFormGroup } from '../../../../models/forms/effet-trait-form';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { TraitForm, TraitFormGroup } from '../../../../models/forms/trait-form';
import { TraitGestionDTO } from '../../../../models/trait/trait-gestion-dto';
import { TypeTraitDTO } from '../../../../models/trait/type-trait-dto';
import { DlcLegerDTO } from '../../../../models/dlc/dlc-leger-dto';
import { AspirationLegerDTO } from '../../../../models/aspiration/aspiration-leger-dto';
import { TypeAspirationDTO } from '../../../../models/aspiration/type-aspiration-dto';
import { CategorieSimDTO } from '../../../../models/categorie-sim-dto';
import {
  TYPES_TRAIT_A_CONDITION,
  TYPES_TRAIT_A_EFFETS,
  TYPES_TRAIT_ASPIRATION,
  TYPES_TRAIT_BONUS,
  TYPES_TRAIT_BOUTIQUE,
  TYPES_TRAIT_EDUCATION,
} from '../../../../models/constantes';

@Injectable({
  providedIn: 'root',
})
export class GestionTraitPageService {
  private readonly traitService = inject(TraitService);

  buildTraitFormGroup(trait: TraitGestionDTO): TraitFormGroup {
    const effets: EffetTraitFormGroup[] =
      trait?.effets?.length > 0
        ? trait?.effets.map((effet) => this.buildEffetTraitFormGroup(effet))
        : [this.buildEmptyEffetTraitFormGroup()];

    return new FormGroup<TraitForm>({
      id: new FormControl<number | null>({ value: trait?.id, disabled: true }),
      nom: new FormControl<string | null>(trait?.nom, Validators.required),
      description: new FormControl<string | null>(trait?.description, Validators.required),
      img: new FormControl<string | null>(trait?.img),
      type: new FormControl<TypeTraitDTO | null>(trait?.type, Validators.required),
      categorieSim: new FormControl<CategorieSimDTO | null>(
        trait?.categorieSim,
        Validators.required,
      ),
      dlc: new FormControl<DlcLegerDTO | null>(trait?.dlc, Validators.required),

      cout: new FormControl<number | null>(trait?.cout, Validators.required),
      qualite: new FormControl<string | null>(trait?.qualite, Validators.required),
      condition: new FormControl<string | null>(trait?.condition, Validators.required),
      effets: new FormArray<EffetTraitFormGroup>(effets),
      typeAspiration: new FormControl<TypeAspirationDTO | null>(
        trait?.typeAspiration,
        Validators.required,
      ),
      aspiration: new FormControl<AspirationLegerDTO | null>(
        trait?.aspiration,
        Validators.required,
      ),
    });
  }

  buildEffetTraitFormGroup(effet: string): EffetTraitFormGroup {
    return new FormGroup<EffetTraitForm>({
      effet: new FormControl<string | null>(effet, Validators.required),
    });
  }

  buildEmptyEffetTraitFormGroup(): EffetTraitFormGroup {
    return new FormGroup<EffetTraitForm>({
      effet: new FormControl<string | null>(null, Validators.required),
    });
  }

  patchFormControlsDisable(formGroup: TraitFormGroup, isModeEdition: boolean): void {
    if (isModeEdition) {
      formGroup.controls.type.disable();
    } else {
      formGroup.controls.type.enable();
    }

    if (this._isTypeBoutique(formGroup)) {
      formGroup.controls.cout.enable();
    } else {
      formGroup.controls.cout.disable();
    }

    if (this._isTypeEducation(formGroup)) {
      formGroup.controls.qualite.enable();
    } else {
      formGroup.controls.qualite.disable();
    }

    if (this._isTypeACondition(formGroup)) {
      formGroup.controls.condition.enable();
      formGroup.controls.effets.disable();
    } else if (this._isTypeAEffets(formGroup)) {
      formGroup.controls.condition.enable();
      formGroup.controls.effets.enable();
    } else {
      formGroup.controls.condition.disable();
      formGroup.controls.effets.disable();
    }

    if (this._isTypeBonus(formGroup)) {
      formGroup.controls.typeAspiration.enable();
    } else {
      formGroup.controls.typeAspiration.disable();
    }

    if (this._isTypeAspiration(formGroup)) {
      formGroup.controls.aspiration.enable();
    } else {
      formGroup.controls.aspiration.disable();
    }
  }

  updateTrait(formGroup: TraitFormGroup): Observable<TraitGestionDTO> {
    const requeteDTO: TraitGestionDTO = this._buildTraitGestionDTO(formGroup);

    return this.traitService.saveTraitGestion(requeteDTO);
  }

  deleteTrait(id: number): Observable<void> {
    return this.traitService.deleteTraitById(id);
  }

  private _buildTraitGestionDTO(formGroup: TraitFormGroup): TraitGestionDTO {
    if (this._isTypeBoutique(formGroup)) {
      return this._buildTraitBoutiqueGestionDTO(formGroup);
    }
    if (this._isTypeEducation(formGroup)) {
      return this._buildTraitEducationGestionDTO(formGroup);
    }
    if (this._isTypeACondition(formGroup)) {
      return this._buildTraitAConditionGestionDTO(formGroup);
    }
    if (this._isTypeAEffets(formGroup)) {
      return this._buildTraitAEffetsGestionDTO(formGroup);
    }
    if (this._isTypeBonus(formGroup)) {
      return this._buildTraitBonusGestionDTO(formGroup);
    }
    if (this._isTypeAspiration(formGroup)) {
      return this._buildTraitAspirationGestionDTO(formGroup);
    }
    return this._buildTraitClassiqueGestionDTO(formGroup);
  }

  private _buildTraitBoutiqueGestionDTO(formGroup: TraitFormGroup): TraitGestionDTO {
    return {
      id: formGroup.controls.id.value,
      nom: formGroup.controls.nom.value ?? '',
      description: formGroup.controls.description.value ?? '',
      img: formGroup.controls.img.value ?? '',
      type: formGroup.controls.type.value ?? { code: '', nom: '' },
      categorieSim: formGroup.controls.categorieSim.value ?? { code: '', nom: '' },
      dlc: formGroup.controls.dlc.value ?? { id: 0, nom: '', img: '' },

      cout: formGroup.controls.cout.value,
      qualite: null,
      condition: null,
      effets: [],
      typeAspiration: null,
      aspiration: null,
    };
  }

  private _buildTraitEducationGestionDTO(formGroup: TraitFormGroup): TraitGestionDTO {
    return {
      id: formGroup.controls.id.value,
      nom: formGroup.controls.nom.value ?? '',
      description: formGroup.controls.description.value ?? '',
      img: formGroup.controls.img.value ?? '',
      type: formGroup.controls.type.value ?? { code: '', nom: '' },
      categorieSim: formGroup.controls.categorieSim.value ?? { code: '', nom: '' },
      dlc: formGroup.controls.dlc.value ?? { id: 0, nom: '', img: '' },

      cout: null,
      qualite: formGroup.controls.qualite.value,
      condition: null,
      effets: [],
      typeAspiration: null,
      aspiration: null,
    };
  }

  private _buildTraitAConditionGestionDTO(formGroup: TraitFormGroup): TraitGestionDTO {
    return {
      id: formGroup.controls.id.value,
      nom: formGroup.controls.nom.value ?? '',
      description: formGroup.controls.description.value ?? '',
      img: formGroup.controls.img.value ?? '',
      type: formGroup.controls.type.value ?? { code: '', nom: '' },
      categorieSim: formGroup.controls.categorieSim.value ?? { code: '', nom: '' },
      dlc: formGroup.controls.dlc.value ?? { id: 0, nom: '', img: '' },

      cout: null,
      qualite: null,
      condition: formGroup.controls.condition.value,
      effets: [],
      typeAspiration: null,
      aspiration: null,
    };
  }

  private _buildTraitAEffetsGestionDTO(formGroup: TraitFormGroup): TraitGestionDTO {
    const effetsFormArray: FormArray<EffetTraitFormGroup> = formGroup.controls.effets;
    const effets: string[] = effetsFormArray.controls.map(
      (effetFormArray) => effetFormArray.controls.effet.value ?? '',
    );

    return {
      id: formGroup.controls.id.value,
      nom: formGroup.controls.nom.value ?? '',
      description: formGroup.controls.description.value ?? '',
      img: formGroup.controls.img.value ?? '',
      type: formGroup.controls.type.value ?? { code: '', nom: '' },
      categorieSim: formGroup.controls.categorieSim.value ?? { code: '', nom: '' },
      dlc: formGroup.controls.dlc.value ?? { id: 0, nom: '', img: '' },

      cout: null,
      qualite: null,
      condition: formGroup.controls.condition.value,
      effets: effets,
      typeAspiration: null,
      aspiration: null,
    };
  }

  private _buildTraitBonusGestionDTO(formGroup: TraitFormGroup): TraitGestionDTO {
    return {
      id: formGroup.controls.id.value,
      nom: formGroup.controls.nom.value ?? '',
      description: formGroup.controls.description.value ?? '',
      img: formGroup.controls.img.value ?? '',
      type: formGroup.controls.type.value ?? { code: '', nom: '' },
      categorieSim: formGroup.controls.categorieSim.value ?? { code: '', nom: '' },
      dlc: formGroup.controls.dlc.value ?? { id: 0, nom: '', img: '' },

      cout: null,
      qualite: null,
      condition: null,
      effets: [],
      typeAspiration: formGroup.controls.typeAspiration.value,
      aspiration: null,
    };
  }

  private _buildTraitAspirationGestionDTO(formGroup: TraitFormGroup): TraitGestionDTO {
    return {
      id: formGroup.controls.id.value,
      nom: formGroup.controls.nom.value ?? '',
      description: formGroup.controls.description.value ?? '',
      img: formGroup.controls.img.value ?? '',
      type: formGroup.controls.type.value ?? { code: '', nom: '' },
      categorieSim: formGroup.controls.categorieSim.value ?? { code: '', nom: '' },
      dlc: formGroup.controls.dlc.value ?? { id: 0, nom: '', img: '' },

      cout: null,
      qualite: null,
      condition: null,
      effets: [],
      typeAspiration: null,
      aspiration: formGroup.controls.aspiration.value,
    };
  }

  private _buildTraitClassiqueGestionDTO(formGroup: TraitFormGroup): TraitGestionDTO {
    return {
      id: formGroup.controls.id.value,
      nom: formGroup.controls.nom.value ?? '',
      description: formGroup.controls.description.value ?? '',
      img: formGroup.controls.img.value ?? '',
      type: formGroup.controls.type.value ?? { code: '', nom: '' },
      categorieSim: formGroup.controls.categorieSim.value ?? { code: '', nom: '' },
      dlc: formGroup.controls.dlc.value ?? { id: 0, nom: '', img: '' },

      cout: null,
      qualite: null,
      condition: null,
      effets: [],
      typeAspiration: null,
      aspiration: null,
    };
  }

  private _isTypeBoutique(formGroup: TraitFormGroup): boolean {
    return TYPES_TRAIT_BOUTIQUE.includes(formGroup.controls.type.value?.code!);
  }

  private _isTypeEducation(formGroup: TraitFormGroup): boolean {
    return TYPES_TRAIT_EDUCATION.includes(formGroup.controls.type.value?.code!);
  }

  private _isTypeACondition(formGroup: TraitFormGroup): boolean {
    return TYPES_TRAIT_A_CONDITION.includes(formGroup.controls.type.value?.code!);
  }

  private _isTypeAEffets(formGroup: TraitFormGroup): boolean {
    return TYPES_TRAIT_A_EFFETS.includes(formGroup.controls.type.value?.code!);
  }

  private _isTypeBonus(formGroup: TraitFormGroup): boolean {
    return TYPES_TRAIT_BONUS.includes(formGroup.controls.type.value?.code!);
  }

  private _isTypeAspiration(formGroup: TraitFormGroup): boolean {
    return TYPES_TRAIT_ASPIRATION.includes(formGroup.controls.type.value?.code!);
  }
}
