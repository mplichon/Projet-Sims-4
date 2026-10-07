import { Component, inject, OnInit, signal, Signal, WritableSignal } from '@angular/core';
import { TypeCarriereDTO } from '../../../../models/carriere/type-carriere-dto';
import { DlcLegerDTO } from '../../../../models/dlc/dlc-leger-dto';
import { CarriereGestionDTO } from '../../../../models/carriere/carriere-gestion-dto';
import { CarriereFormGroup } from '../../../../models/forms/carriere-form';
import { GestionCarrierePageService } from '../services/gestion-carriere-page-service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormArray, ReactiveFormsModule } from '@angular/forms';
import { BrancheCarriereFormGroup } from '../../../../models/forms/branche-carriere-form';
import { RangCarriereFormGroup } from '../../../../models/forms/rang-carriere-form';
import { ExigencePourPromotionFormGroup } from '../../../../models/forms/exigence-pour-promotion-form';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { TabsModule } from 'primeng/tabs';
import { AvatarModule } from 'primeng/avatar';
import { finalize, take, tap } from 'rxjs';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

@Component({
  selector: 'sims-pop-up-ajout-modification-gestion-carriere',
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    TextareaModule,
    SelectModule,
    ButtonModule,
    InputNumberModule,
    CheckboxModule,
    TabsModule,
    AvatarModule,
    InputGroupModule,
    InputGroupAddonModule,
  ],
  templateUrl: './pop-up-ajout-modification-gestion-carriere.html',
  styleUrl: './pop-up-ajout-modification-gestion-carriere.css',
})
export class PopUpAjoutModificationGestionCarriere implements OnInit {
  types!: Signal<TypeCarriereDTO[]>;
  dlcs!: Signal<DlcLegerDTO[]>;
  isModeEdition!: Signal<boolean>;
  carriere!: Signal<CarriereGestionDTO>;

  isLoading: WritableSignal<boolean> = signal(false);

  formGroup!: CarriereFormGroup;

  private readonly gestionCarrierePageService = inject(GestionCarrierePageService);
  private readonly ref = inject(DynamicDialogRef);
  private readonly config = inject(DynamicDialogConfig);

  ngOnInit(): void {
    this.types = this.config?.data?.types;
    this.dlcs = this.config?.data?.dlcs;
    this.isModeEdition = signal(this.config?.data?.isModeEdition);
    this.carriere = signal(this.config?.data?.carriere);

    this.formGroup = this.gestionCarrierePageService.buildCarriereFormGroup(this.carriere());
    this.gestionCarrierePageService.patchBranchesDisable(
      this.branchesFormArray(),
      this.formGroup.controls.hasBranches.value,
    );

    this.formGroup.controls.hasBranches.valueChanges.subscribe((hasBranches) => {
      this.gestionCarrierePageService.patchBranchesDisable(this.branchesFormArray(), hasBranches);
    });
  }

  // FormArray
  rangsFormArray(): FormArray<RangCarriereFormGroup> {
    return this.formGroup?.controls?.rangs;
  }

  exigencesRangFormArray(indexRang: number): FormArray<ExigencePourPromotionFormGroup> {
    return this.rangsFormArray()?.at(indexRang)?.controls?.exigencesPourPromotion;
  }

  branchesFormArray(): FormArray<BrancheCarriereFormGroup> {
    return this.formGroup?.controls?.branches;
  }

  rangsBrancheFormArray(indexBranche: number): FormArray<RangCarriereFormGroup> {
    return this.branchesFormArray()?.at(indexBranche)?.controls?.rangs;
  }

  exigencesRangBrancheFormArray(
    indexBranche: number,
    indexRang: number,
  ): FormArray<ExigencePourPromotionFormGroup> {
    return this.rangsBrancheFormArray(indexBranche)?.at(indexRang)?.controls
      ?.exigencesPourPromotion;
  }

  // isSupprimerButtonDisabled
  isSupprimerRangButtonDisabled(): boolean {
    return this.rangsFormArray().length <= 1;
  }

  isSupprimerExigenceRangButtonDisabled(indexRang: number): boolean {
    return this.exigencesRangFormArray(indexRang).length <= 1;
  }

  isSupprimerBrancheButtonDisabled(): boolean {
    return this.branchesFormArray().length <= 1;
  }

  isSupprimerRangBrancheButtonDisabled(indexBranche: number): boolean {
    return this.rangsBrancheFormArray(indexBranche).length <= 1;
  }

  isSupprimerExigenceRangBrancheButtonDisabled(indexBranche: number, indexRang: number): boolean {
    return this.exigencesRangBrancheFormArray(indexBranche, indexRang).length <= 1;
  }

  // méthodes add et remove
  addRang(): void {
    const rangFormGroup: RangCarriereFormGroup =
      this.gestionCarrierePageService.buildEmptyRangCarriereFormGroup();
    this.rangsFormArray().push(rangFormGroup);
  }

  removeRang(index: number): void {
    this.rangsFormArray().removeAt(index);
  }

  addExigenceRang(indexRang: number): void {
    const exigenceFormGroup: ExigencePourPromotionFormGroup =
      this.gestionCarrierePageService.buildEmptyExigencePourPromotionFormGroup();
    this.exigencesRangFormArray(indexRang).push(exigenceFormGroup);
  }

  removeExigenceRang(indexRang: number, indexExigence: number): void {
    this.exigencesRangFormArray(indexRang).removeAt(indexExigence);
  }

  addRangBranche(indexBranche: number): void {
    const rangFormGroup: RangCarriereFormGroup =
      this.gestionCarrierePageService.buildEmptyRangCarriereFormGroup();
    this.rangsBrancheFormArray(indexBranche).push(rangFormGroup);
  }

  removeRangBranche(indexBranche: number, indexRang: number): void {
    this.rangsBrancheFormArray(indexBranche).removeAt(indexRang);
  }

  addExigenceRangBranche(indexBranche: number, indexRang: number): void {
    const exigenceFormGroup: ExigencePourPromotionFormGroup =
      this.gestionCarrierePageService.buildEmptyExigencePourPromotionFormGroup();
    this.exigencesRangBrancheFormArray(indexBranche, indexRang).push(exigenceFormGroup);
  }

  removeExigenceRangBranche(indexBranche: number, indexRang: number, indexExigence: number): void {
    this.exigencesRangBrancheFormArray(indexBranche, indexRang).removeAt(indexExigence);
  }

  // Actions boutons
  onCancel(): void {
    this.ref.close(false);
  }

  onSubmit(): void {
    this.isLoading.set(true);
    this.gestionCarrierePageService
      .updateCarriere(this.formGroup)
      .pipe(
        take(1),
        tap(() => this.ref.close(true)),
        finalize(() => this.isLoading.set(false)),
      )
      .subscribe();
  }
}
