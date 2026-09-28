import { Component, inject, OnInit, signal, Signal, WritableSignal } from '@angular/core';
import { GestionAspirationPageService } from '../services/gestion-aspiration-page-service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { finalize, forkJoin, tap } from 'rxjs';
import { ButtonModule } from 'primeng/button';
import { AspirationGestionDTO } from '../../../../models/aspiration/aspiration-gestion-dto';

@Component({
  selector: 'sims-pop-up-suppression-aspirations-selectionnees',
  imports: [ButtonModule],
  templateUrl: './pop-up-suppression-aspirations-selectionnees.html',
  styleUrl: './pop-up-suppression-aspirations-selectionnees.css',
})
export class PopUpSuppressionAspirationsSelectionnees implements OnInit {
  selectedAspirations!: Signal<AspirationGestionDTO[]>;

  isLoading: WritableSignal<boolean> = signal(false);

  private readonly gestionAspirationPageService = inject(GestionAspirationPageService);
  private readonly ref = inject(DynamicDialogRef);
  private readonly config = inject(DynamicDialogConfig);

  ngOnInit(): void {
    this.selectedAspirations = this.config?.data?.selectedAspirations;
  }

  onCancel(): void {
    this.ref.close(false);
  }

  onSubmit(): void {
    this.isLoading.set(true);
    forkJoin(
      this.selectedAspirations().map((aspiration) =>
        this.gestionAspirationPageService.deleteAspiration(aspiration.id ?? 0),
      ),
    )
      .pipe(
        tap(() => this.ref.close(true)),
        finalize(() => this.isLoading.set(false)),
      )
      .subscribe();
  }
}
