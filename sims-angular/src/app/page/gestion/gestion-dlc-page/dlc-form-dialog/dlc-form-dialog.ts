import { Component, input, OnInit, output } from '@angular/core';
import { DlcFormGroup } from '../../../../models/forms/dlc-form';
import { ControlContainer, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DatePickerModule, DatePickerPassThrough } from 'primeng/datepicker';
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';
import { TypeDlcDTO } from '../../../../models/dlc/type-dlc-dto';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'sims-dlc-form-dialog',
  imports: [
    ReactiveFormsModule,
    DialogModule,
    InputTextModule,
    DatePickerModule,
    TextareaModule,
    SelectModule,
    ButtonModule,
  ],
  templateUrl: './dlc-form-dialog.html',
  styleUrl: './dlc-form-dialog.css',
})
export class DlcFormDialog implements OnInit {
  formGroup!: DlcFormGroup;
  title = input<string>();
  isVisible = input.required<boolean>();
  types = input<TypeDlcDTO[]>();

  cancel = output<void>();
  submit = output<void>();

  constructor(public controlContainer: ControlContainer) {}

  ngOnInit(): void {
    this.formGroup = this.controlContainer.control as DlcFormGroup;
  }

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.submit.emit();
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
