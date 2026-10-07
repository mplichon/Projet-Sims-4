import { Component, inject, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { FormArray, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { AspirationFormGroup } from '../../../../models/forms/aspiration-form';
import { TypeAspirationDTO } from '../../../../models/aspiration/type-aspiration-dto';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GestionAspirationPageService } from '../services/gestion-aspiration-page-service';
import { TraitLegerDTO } from '../../../../models/trait/trait-leger-dto';
import { DlcLegerDTO } from '../../../../models/dlc/dlc-leger-dto';
import { EtapeAspirationFormGroup } from '../../../../models/forms/etape-aspiration-form';
import { SousEtapeAspirationFormGroup } from '../../../../models/forms/sous-etape-aspiration-form';
import { finalize, take, tap } from 'rxjs';
import { AspirationGestionDTO } from '../../../../models/aspiration/aspiration-gestion-dto';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

@Component({
  selector: 'sims-pop-up-ajout-modification-gestion-aspiration',
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    TextareaModule,
    SelectModule,
    ButtonModule,
    InputGroupModule,
    InputGroupAddonModule,
  ],
  templateUrl: './pop-up-ajout-modification-gestion-aspiration.html',
  styleUrl: './pop-up-ajout-modification-gestion-aspiration.css',
})
export class PopUpAjoutModificationGestionAspiration implements OnInit {
  types!: Signal<TypeAspirationDTO[]>;
  dlcs!: Signal<DlcLegerDTO[]>;
  traitsAspiration!: Signal<TraitLegerDTO[]>;
  isModeEdition!: Signal<boolean>;
  aspiration!: Signal<AspirationGestionDTO>;

  isLoading: WritableSignal<boolean> = signal(false);

  formGroup!: AspirationFormGroup;

  private readonly gestionAspirationPageService = inject(GestionAspirationPageService);
  private readonly ref = inject(DynamicDialogRef);
  private readonly config = inject(DynamicDialogConfig);

  ngOnInit(): void {
    this.types = this.config?.data?.types;
    this.dlcs = this.config?.data?.dlcs;
    this.traitsAspiration = this.config?.data?.traitsAspiration;
    this.isModeEdition = signal(this.config?.data?.isModeEdition);
    this.aspiration = signal(this.config?.data?.aspiration);

    this.formGroup = this.gestionAspirationPageService.buildAspirationFormGroup(this.aspiration());
  }

  etapesFormArray(): FormArray<EtapeAspirationFormGroup> {
    return this.formGroup?.controls?.etapes;
  }

  sousEtapesFormArray(index: number): FormArray<SousEtapeAspirationFormGroup> {
    return this.etapesFormArray().at(index).controls.sousEtapes;
  }

  isSupprimerEtapeButtonDisabled(): boolean {
    return this.etapesFormArray().length <= 1;
  }

  isSupprimerSousEtapeButtonDisabled(index: number): boolean {
    return this.sousEtapesFormArray(index).length <= 1;
  }

  addEtape(): void {
    const etapeFormGroup: EtapeAspirationFormGroup =
      this.gestionAspirationPageService.buildEmptyEtapeAspirationFormGroup();
    this.etapesFormArray().push(etapeFormGroup);
  }

  removeEtape(index: number): void {
    this.etapesFormArray().removeAt(index);
  }

  addSousEtape(index: number): void {
    const sousEtapeFormGroup: SousEtapeAspirationFormGroup =
      this.gestionAspirationPageService.buildEmptySousEtapeAspirationFormGroup();
    this.sousEtapesFormArray(index).push(sousEtapeFormGroup);
  }

  removeSousEtape(indexEtape: number, indexSousEtape: number): void {
    this.sousEtapesFormArray(indexEtape).removeAt(indexSousEtape);
  }

  onCancel(): void {
    this.ref.close(false);
  }

  onSubmit(): void {
    this.isLoading.set(true);
    this.gestionAspirationPageService
      .updateAspiration(this.formGroup)
      .pipe(
        take(1),
        tap(() => this.ref.close(true)),
        finalize(() => this.isLoading.set(false)),
      )
      .subscribe();
  }
}
