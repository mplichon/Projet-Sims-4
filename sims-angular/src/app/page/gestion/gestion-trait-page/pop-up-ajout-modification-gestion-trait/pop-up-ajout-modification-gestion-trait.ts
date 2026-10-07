import { Component, inject, OnInit, signal, Signal, WritableSignal } from '@angular/core';
import { TypeTraitDTO } from '../../../../models/trait/type-trait-dto';
import { DlcLegerDTO } from '../../../../models/dlc/dlc-leger-dto';
import { TraitGestionDTO } from '../../../../models/trait/trait-gestion-dto';
import { TraitFormGroup } from '../../../../models/forms/trait-form';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GestionTraitPageService } from '../services/gestion-trait-page-service';
import { CategorieSimDTO } from '../../../../models/categorie-sim-dto';
import { TypeAspirationDTO } from '../../../../models/aspiration/type-aspiration-dto';
import { AspirationLegerDTO } from '../../../../models/aspiration/aspiration-leger-dto';
import { FormArray, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';
import {
  TYPES_TRAIT_A_CONDITION,
  TYPES_TRAIT_A_EFFETS,
  TYPES_TRAIT_ASPIRATION,
  TYPES_TRAIT_BONUS,
  TYPES_TRAIT_BOUTIQUE,
  TYPES_TRAIT_EDUCATION,
} from '../../../../models/constantes';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { EffetTraitFormGroup } from '../../../../models/forms/effet-trait-form';
import { finalize, take, tap } from 'rxjs';

@Component({
  selector: 'sims-pop-up-ajout-modification-gestion-trait',
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    TextareaModule,
    SelectModule,
    InputNumberModule,
    ButtonModule,
    InputGroupModule,
    InputGroupAddonModule,
  ],
  templateUrl: './pop-up-ajout-modification-gestion-trait.html',
  styleUrl: './pop-up-ajout-modification-gestion-trait.css',
})
export class PopUpAjoutModificationGestionTrait implements OnInit {
  types!: Signal<TypeTraitDTO[]>;
  categories!: Signal<CategorieSimDTO[]>;
  dlcs!: Signal<DlcLegerDTO[]>;
  typesAspiration!: Signal<TypeAspirationDTO[]>;
  aspirations!: Signal<AspirationLegerDTO[]>;
  isModeEdition!: Signal<boolean>;
  trait!: Signal<TraitGestionDTO>;

  isLoading: WritableSignal<boolean> = signal(false);

  formGroup!: TraitFormGroup;

  private readonly gestionTraitPageService = inject(GestionTraitPageService);
  private readonly ref = inject(DynamicDialogRef);
  private readonly config = inject(DynamicDialogConfig);

  ngOnInit(): void {
    this.types = this.config?.data?.types;
    this.categories = this.config?.data?.categories;
    this.dlcs = this.config?.data?.dlcs;
    this.typesAspiration = this.config?.data?.typesAspiration;
    this.aspirations = this.config?.data?.aspirations;
    this.isModeEdition = signal(this.config?.data?.isModeEdition);
    this.trait = signal(this.config?.data?.trait);

    console.warn('trait', this.trait());

    this.formGroup = this.gestionTraitPageService.buildTraitFormGroup(this.trait());
    this.gestionTraitPageService.patchFormControlsDisable(this.formGroup, this.isModeEdition());

    this.formGroup.controls.type.valueChanges.subscribe(() => {
      this.gestionTraitPageService.patchFormControlsDisable(this.formGroup, this.isModeEdition());
    });
  }

  // Types de traits
  isTypeBoutique(): boolean {
    return TYPES_TRAIT_BOUTIQUE.includes(this.formGroup.controls.type.value?.code!);
  }

  isTypeEducation(): boolean {
    return TYPES_TRAIT_EDUCATION.includes(this.formGroup.controls.type.value?.code!);
  }

  isTypeACondition(): boolean {
    return TYPES_TRAIT_A_CONDITION.includes(this.formGroup.controls.type.value?.code!);
  }

  isTypeAEffets(): boolean {
    return TYPES_TRAIT_A_EFFETS.includes(this.formGroup.controls.type.value?.code!);
  }

  isTypeBonus(): boolean {
    return TYPES_TRAIT_BONUS.includes(this.formGroup.controls.type.value?.code!);
  }

  isTypeAspiration(): boolean {
    return TYPES_TRAIT_ASPIRATION.includes(this.formGroup.controls.type.value?.code!);
  }

  // Effets
  effetsFormArray(): FormArray<EffetTraitFormGroup> {
    return this.formGroup.controls.effets;
  }

  isSupprimerEffetButtonDisabled(): boolean {
    return this.effetsFormArray().length <= 1;
  }

  addEffet(): void {
    const effetFormGroup: EffetTraitFormGroup =
      this.gestionTraitPageService.buildEmptyEffetTraitFormGroup();
    this.effetsFormArray().push(effetFormGroup);
  }

  removeEffet(index: number): void {
    this.effetsFormArray().removeAt(index);
  }

  // Méthodes add et remove
  onCancel(): void {
    this.ref.close(false);
  }

  onSubmit(): void {
    this.isLoading.set(true);
    this.gestionTraitPageService
      .updateTrait(this.formGroup)
      .pipe(
        take(1),
        tap(() => this.ref.close(true)),
        finalize(() => this.isLoading.set(false)),
      )
      .subscribe();
  }
}
