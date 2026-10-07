import { Component, inject, OnInit, signal, Signal, WritableSignal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { GestionCompetencePageService } from '../services/gestion-competence-page-service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { finalize, take, tap } from 'rxjs';
import { CompetenceGestionDTO } from '../../../../models/competence/competence-gestion-dto';

@Component({
  selector: 'sims-pop-up-suppression-competence',
  imports: [ButtonModule],
  templateUrl: './pop-up-suppression-competence.html',
  styleUrl: './pop-up-suppression-competence.css',
})
export class PopUpSuppressionCompetence implements OnInit {
  competence!: Signal<CompetenceGestionDTO>;

  isLoading: WritableSignal<boolean> = signal(false);

  private readonly gestionCompetencePageService = inject(GestionCompetencePageService);
  private readonly ref = inject(DynamicDialogRef);
  private readonly config = inject(DynamicDialogConfig);

  ngOnInit(): void {
    this.competence = signal(this.config?.data?.competence);
  }

  onCancel(): void {
    this.ref.close(false);
  }

  onSubmit(): void {
    this.isLoading.set(true);
    this.gestionCompetencePageService
      .deleteCompetence(this.competence()?.id ?? 0)
      .pipe(
        take(1),
        tap(() => this.ref.close(true)),
        finalize(() => this.isLoading.set(false)),
      )
      .subscribe();
  }
}
