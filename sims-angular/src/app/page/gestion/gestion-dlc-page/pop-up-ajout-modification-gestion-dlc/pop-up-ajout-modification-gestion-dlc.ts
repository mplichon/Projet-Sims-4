import { Component, inject, OnInit, signal, Signal, WritableSignal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule, DatePickerPassThrough } from 'primeng/datepicker';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { DlcFormGroup } from '../../../../models/forms/dlc-form';
import { TypeDlcDTO } from '../../../../models/dlc/type-dlc-dto';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GestionDlcPageService } from '../services/gestion-dlc-page-service';
import { finalize, take, tap } from 'rxjs';
import { ReponseListeGestionDlcDTO } from '../../../../models/dlc/reponse-liste-gestion-dlc-dto';

@Component({
  selector: 'sims-pop-up-ajout-modification-gestion-dlc',
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    DatePickerModule,
    TextareaModule,
    SelectModule,
    ButtonModule,
  ],
  templateUrl: './pop-up-ajout-modification-gestion-dlc.html',
  styleUrl: './pop-up-ajout-modification-gestion-dlc.css',
})
export class PopUpAjoutModificationGestionDlc implements OnInit {
  types!: Signal<TypeDlcDTO[]>;
  isModeEdition!: Signal<boolean>;
  dlc!: Signal<ReponseListeGestionDlcDTO>;

  isLoading: WritableSignal<boolean> = signal(false);

  formGroup!: DlcFormGroup;

  private readonly gestionDlcPageService = inject(GestionDlcPageService);
  private readonly ref = inject(DynamicDialogRef);
  private readonly config = inject(DynamicDialogConfig);

  ngOnInit(): void {
    this.types = this.config?.data?.types;
    this.isModeEdition = signal(this.config?.data?.isModeEdition);
    this.dlc = signal(this.config?.data?.dlc);

    this.formGroup = this.gestionDlcPageService.buildFormGroup(this.dlc());
  }

  onCancel(): void {
    this.ref.close(false);
  }

  onSubmit(): void {
    this.isLoading.set(true);
    this.gestionDlcPageService
      .updateDlc(this.formGroup)
      .pipe(
        take(1),
        tap(() => this.ref.close(true)),
        finalize(() => this.isLoading.set(false)),
      )
      .subscribe();
  }

  datepickerPt: DatePickerPassThrough = {
    header: {
      style: {
        fontSize: '0.9rem',
        height: '1.6rem',
      },
    },
    tableHeader: {
      style: {
        fontSize: '0.9rem',
        height: '1rem',
      },
    },
    table: {
      style: {
        fontSize: '0.85rem',
        height: '1rem',
      },
    },
    weekDayCell: {
      style: {
        padding: '0',
      },
    },
    dayCell: {
      style: {
        padding: '0',
      },
    },
  };
}
