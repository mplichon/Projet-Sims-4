import { Component, inject, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { GestionDlcPageService } from '../services/gestion-dlc-page-service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { finalize, take, tap } from 'rxjs';
import { DlcGestionDTO } from '../../../../models/dlc/dlc-gestion-dto';

@Component({
  selector: 'sims-pop-up-suppression-dlc',
  imports: [ButtonModule],
  templateUrl: './pop-up-suppression-dlc.html',
  styleUrl: './pop-up-suppression-dlc.css',
})
export class PopUpSuppressionDlc implements OnInit {
  dlc!: Signal<DlcGestionDTO>;

  isLoading: WritableSignal<boolean> = signal(false);

  private readonly gestionDlcPageService = inject(GestionDlcPageService);
  private readonly ref = inject(DynamicDialogRef);
  private readonly config = inject(DynamicDialogConfig);

  ngOnInit(): void {
    this.dlc = signal(this.config?.data?.dlc);
  }

  onCancel(): void {
    this.ref.close(false);
  }

  onSubmit(): void {
    this.isLoading.set(true);
    this.gestionDlcPageService
      .deleteDlc(this.dlc().id ?? 0)
      .pipe(
        take(1),
        tap(() => this.ref.close(true)),
        finalize(() => this.isLoading.set(false)),
      )
      .subscribe();
  }
}
