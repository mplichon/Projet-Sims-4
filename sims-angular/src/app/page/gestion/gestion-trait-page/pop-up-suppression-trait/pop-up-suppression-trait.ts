import { Component, inject, signal, Signal, WritableSignal } from '@angular/core';
import { TraitGestionDTO } from '../../../../models/trait/trait-gestion-dto';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { finalize, take, tap } from 'rxjs';
import { GestionTraitPageService } from '../services/gestion-trait-page-service';

@Component({
  selector: 'sims-pop-up-suppression-trait',
  imports: [ButtonModule],
  templateUrl: './pop-up-suppression-trait.html',
  styleUrl: './pop-up-suppression-trait.css',
})
export class PopUpSuppressionTrait {
  trait!: Signal<TraitGestionDTO>;

  isLoading: WritableSignal<boolean> = signal(false);

  private readonly gestionTraitPageService = inject(GestionTraitPageService);
  private readonly ref = inject(DynamicDialogRef);
  private readonly config = inject(DynamicDialogConfig);

  ngOnInit(): void {
    this.trait = signal(this.config?.data?.trait);
  }

  onCancel(): void {
    this.ref.close(false);
  }

  onSubmit(): void {
    this.isLoading.set(true);
    this.gestionTraitPageService
      .deleteTrait(this.trait().id ?? 0)
      .pipe(
        take(1),
        tap(() => this.ref.close(true)),
        finalize(() => this.isLoading.set(false)),
      )
      .subscribe();
  }
}
