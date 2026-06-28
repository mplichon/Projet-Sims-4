import { Component, inject, Signal, signal, WritableSignal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { GestionDlcPageService } from '../services/gestion-dlc-page-service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ReponseListeGestionDlcDTO } from '../../../../models/dlc/reponse-liste-gestion-dlc-dto';
import { finalize, take, tap } from 'rxjs';

@Component({
  selector: 'sims-pop-up-suppression-dlc',
  imports: [ButtonModule],
  templateUrl: './pop-up-suppression-dlc.html',
  styleUrl: './pop-up-suppression-dlc.css',
})
export class PopUpSuppressionDlc {
  dlc!: Signal<ReponseListeGestionDlcDTO>;

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
      .deleteDlc(this.dlc().id)
      .pipe(
        take(1),
        tap(() => this.ref.close(true)),
        finalize(() => this.isLoading.set(false)),
      )
      .subscribe();
  }
}
