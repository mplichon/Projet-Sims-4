import { Component, inject, signal, Signal, WritableSignal } from '@angular/core';
import { TraitGestionDTO } from '../../../../models/trait/trait-gestion-dto';
import { GestionTraitPageService } from '../services/gestion-trait-page-service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { finalize, forkJoin, tap } from 'rxjs';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'sims-pop-up-suppression-traits-selectionnes',
  imports: [ButtonModule],
  templateUrl: './pop-up-suppression-traits-selectionnes.html',
  styleUrl: './pop-up-suppression-traits-selectionnes.css',
})
export class PopUpSuppressionTraitsSelectionnes {
  selectedTraits!: Signal<TraitGestionDTO[]>;

  isLoading: WritableSignal<boolean> = signal(false);

  private readonly gestionTraitPageService = inject(GestionTraitPageService);
  private readonly ref = inject(DynamicDialogRef);
  private readonly config = inject(DynamicDialogConfig);

  ngOnInit(): void {
    this.selectedTraits = this.config?.data?.selectedTraits;
  }

  onCancel(): void {
    this.ref.close(false);
  }

  onSubmit(): void {
    this.isLoading.set(true);
    forkJoin(
      this.selectedTraits().map((carriere) =>
        this.gestionTraitPageService.deleteTrait(carriere.id ?? 0),
      ),
    )
      .pipe(
        tap(() => this.ref.close(true)),
        finalize(() => this.isLoading.set(false)),
      )
      .subscribe();
  }
}
