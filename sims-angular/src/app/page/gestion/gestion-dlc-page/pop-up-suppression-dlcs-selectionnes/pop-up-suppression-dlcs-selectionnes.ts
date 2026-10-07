import { Component, inject, OnInit, signal, Signal, WritableSignal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GestionDlcPageService } from '../services/gestion-dlc-page-service';
import { finalize, forkJoin, tap } from 'rxjs';
import { DlcGestionDTO } from '../../../../models/dlc/dlc-gestion-dto';

@Component({
  selector: 'sims-pop-up-suppression-dlcs-selectionnes',
  imports: [ButtonModule],
  templateUrl: './pop-up-suppression-dlcs-selectionnes.html',
  styleUrl: './pop-up-suppression-dlcs-selectionnes.css',
})
export class PopUpSuppressionDlcsSelectionnes implements OnInit {
  selectedDlcs!: Signal<DlcGestionDTO[]>;

  isLoading: WritableSignal<boolean> = signal(false);

  private readonly gestionDlcPageService = inject(GestionDlcPageService);
  private readonly ref = inject(DynamicDialogRef);
  private readonly config = inject(DynamicDialogConfig);

  ngOnInit(): void {
    this.selectedDlcs = this.config?.data?.selectedDlcs;
  }

  onCancel(): void {
    this.ref.close(false);
  }

  onSubmit(): void {
    this.isLoading.set(true);
    forkJoin(this.selectedDlcs().map((dlc) => this.gestionDlcPageService.deleteDlc(dlc.id ?? 0)))
      .pipe(
        tap(() => this.ref.close(true)),
        finalize(() => this.isLoading.set(false)),
      )
      .subscribe();
  }
}
