import { Component, inject, OnInit, signal, Signal, WritableSignal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { CategorieSimDTO } from '../../../../models/categorie-sim-dto';
import { DlcLegerDTO } from '../../../../models/dlc/dlc-leger-dto';
import { CompetenceFormGroup } from '../../../../models/forms/competence-form';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GestionCompetencePageService } from '../services/gestion-competence-page-service';
import { finalize, take, tap } from 'rxjs';
import { CompetenceGestionDTO } from '../../../../models/competence/competence-gestion-dto';

@Component({
  selector: 'sims-pop-up-ajout-modification-gestion-competence',
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    TextareaModule,
    InputNumberModule,
    SelectModule,
    ButtonModule,
  ],
  templateUrl: './pop-up-ajout-modification-gestion-competence.html',
  styleUrl: './pop-up-ajout-modification-gestion-competence.css',
})
export class PopUpAjoutModificationGestionCompetence implements OnInit {
  categoriesSims!: Signal<CategorieSimDTO[]>;
  dlcs!: Signal<DlcLegerDTO[]>;
  isModeEdition!: Signal<boolean>;
  competence!: Signal<CompetenceGestionDTO>;

  isLoading: WritableSignal<boolean> = signal(false);

  formGroup!: CompetenceFormGroup;

  private readonly gestionCompetencePageService = inject(GestionCompetencePageService);
  private readonly ref = inject(DynamicDialogRef);
  private readonly config = inject(DynamicDialogConfig);

  ngOnInit(): void {
    this.categoriesSims = this.config?.data?.categoriesSims;
    this.dlcs = this.config?.data?.dlcs;
    this.isModeEdition = signal(this.config?.data?.isModeEdition);
    this.competence = signal(this.config?.data?.competence);

    this.formGroup = this.gestionCompetencePageService.buildFormGroup(this.competence());
  }

  onCancel(): void {
    this.ref.close(false);
  }

  onSubmit(): void {
    this.isLoading.set(true);
    this.gestionCompetencePageService
      .updateCompetence(this.formGroup)
      .pipe(
        take(1),
        tap(() => this.ref.close(true)),
        finalize(() => this.isLoading.set(false)),
      )
      .subscribe();
  }
}
