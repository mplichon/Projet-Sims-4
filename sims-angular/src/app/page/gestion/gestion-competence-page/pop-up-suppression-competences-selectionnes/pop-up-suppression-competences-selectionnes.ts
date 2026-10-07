import { Component, inject, OnInit, signal, Signal, WritableSignal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { GestionCompetencePageService } from '../services/gestion-competence-page-service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { finalize, forkJoin, tap } from 'rxjs';
import { CompetenceGestionDTO } from '../../../../models/competence/competence-gestion-dto';

@Component({
  selector: 'sims-pop-up-suppression-competences-selectionnes',
  imports: [ButtonModule],
  templateUrl: './pop-up-suppression-competences-selectionnes.html',
  styleUrl: './pop-up-suppression-competences-selectionnes.css',
})
export class PopUpSuppressionCompetencesSelectionnes implements OnInit {
  selectedCompetences!: Signal<CompetenceGestionDTO[]>;

  isLoading: WritableSignal<boolean> = signal(false);

  private readonly gestionCompetencePageService = inject(GestionCompetencePageService);
  private readonly ref = inject(DynamicDialogRef);
  private readonly config = inject(DynamicDialogConfig);

  ngOnInit(): void {
    this.selectedCompetences = this.config?.data?.selectedCompetences;
  }

  onCancel(): void {
    this.ref.close(false);
  }

  onSubmit(): void {
    this.isLoading.set(true);
    forkJoin(
      this.selectedCompetences().map((competence) =>
        this.gestionCompetencePageService.deleteCompetence(competence.id ?? 0),
      ),
    )
      .pipe(
        tap(() => this.ref.close(true)),
        finalize(() => this.isLoading.set(false)),
      )
      .subscribe();
  }
}
