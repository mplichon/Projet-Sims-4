import { Component, inject, OnInit, signal, Signal, WritableSignal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { GestionAspirationPageService } from '../services/gestion-aspiration-page-service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { finalize, take, tap } from 'rxjs';
import { AspirationGestionDTO } from '../../../../models/aspiration/aspiration-gestion-dto';

@Component({
  selector: 'sims-pop-up-suppression-aspiration',
  imports: [ButtonModule],
  templateUrl: './pop-up-suppression-aspiration.html',
  styleUrl: './pop-up-suppression-aspiration.css',
})
export class PopUpSuppressionAspiration implements OnInit {
  aspiration!: Signal<AspirationGestionDTO>;

  isLoading: WritableSignal<boolean> = signal(false);

  private readonly gestionAspirationPageService = inject(GestionAspirationPageService);
  private readonly ref = inject(DynamicDialogRef);
  private readonly config = inject(DynamicDialogConfig);

  ngOnInit(): void {
    this.aspiration = signal(this.config?.data?.aspiration);
  }

  onCancel(): void {
    this.ref.close(false);
  }

  onSubmit(): void {
    this.isLoading.set(true);
    this.gestionAspirationPageService
      .deleteAspiration(this.aspiration().id ?? 0)
      .pipe(
        take(1),
        tap(() => this.ref.close(true)),
        finalize(() => this.isLoading.set(false)),
      )
      .subscribe();
  }
}
