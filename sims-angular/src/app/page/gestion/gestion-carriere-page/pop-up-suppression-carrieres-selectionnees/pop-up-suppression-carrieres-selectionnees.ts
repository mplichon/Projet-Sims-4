import { Component, inject, Signal, signal, WritableSignal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarriereGestionDTO } from '../../../../models/carriere/carriere-gestion-dto';
import { GestionCarrierePageService } from '../services/gestion-carriere-page-service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { finalize, forkJoin, tap } from 'rxjs';

@Component({
  selector: 'sims-pop-up-suppression-carrieres-selectionnees',
  imports: [ButtonModule],
  templateUrl: './pop-up-suppression-carrieres-selectionnees.html',
  styleUrl: './pop-up-suppression-carrieres-selectionnees.css',
})
export class PopUpSuppressionCarrieresSelectionnees {
  selectedCarrieres!: Signal<CarriereGestionDTO[]>;

  isLoading: WritableSignal<boolean> = signal(false);

  private readonly gestionCarrierePageService = inject(GestionCarrierePageService);
  private readonly ref = inject(DynamicDialogRef);
  private readonly config = inject(DynamicDialogConfig);

  ngOnInit(): void {
    this.selectedCarrieres = this.config?.data?.selectedCarrieres;
  }

  onCancel(): void {
    this.ref.close(false);
  }

  onSubmit(): void {
    this.isLoading.set(true);
    forkJoin(
      this.selectedCarrieres().map((carriere) =>
        this.gestionCarrierePageService.deleteCarriere(carriere.id ?? 0),
      ),
    )
      .pipe(
        tap(() => this.ref.close(true)),
        finalize(() => this.isLoading.set(false)),
      )
      .subscribe();
  }
}
