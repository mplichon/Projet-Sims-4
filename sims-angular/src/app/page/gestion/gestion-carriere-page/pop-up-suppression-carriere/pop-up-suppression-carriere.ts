import { Component, inject, signal, Signal, WritableSignal } from '@angular/core';
import { CarriereGestionDTO } from '../../../../models/carriere/carriere-gestion-dto';
import { GestionCarrierePageService } from '../services/gestion-carriere-page-service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { finalize, take, tap } from 'rxjs';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'sims-pop-up-suppression-carriere',
  imports: [ButtonModule],
  templateUrl: './pop-up-suppression-carriere.html',
  styleUrl: './pop-up-suppression-carriere.css',
})
export class PopUpSuppressionCarriere {
  carriere!: Signal<CarriereGestionDTO>;

  isLoading: WritableSignal<boolean> = signal(false);

  private readonly gestionCarrierePageService = inject(GestionCarrierePageService);
  private readonly ref = inject(DynamicDialogRef);
  private readonly config = inject(DynamicDialogConfig);

  ngOnInit(): void {
    this.carriere = signal(this.config?.data?.carriere);
  }

  onCancel(): void {
    this.ref.close(false);
  }

  onSubmit(): void {
    this.isLoading.set(true);
    this.gestionCarrierePageService
      .deleteCarriere(this.carriere().id ?? 0)
      .pipe(
        take(1),
        tap(() => this.ref.close(true)),
        finalize(() => this.isLoading.set(false)),
      )
      .subscribe();
  }
}
