import { Component, input, model, OnInit, output, viewChild } from '@angular/core';
import { Table, TableModule, TablePassThrough } from 'primeng/table';
import { Column } from '../../../../models/table-models';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { DlcGestionDTO } from '../../../../models/dlc/dlc-gestion-dto';

@Component({
  selector: 'sims-dlc-gestion-tableau',
  imports: [
    CommonModule,
    TableModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    TagModule,
    ButtonModule,
  ],
  templateUrl: './dlc-gestion-tableau.html',
  styleUrl: './dlc-gestion-tableau.css',
})
export class DlcGestionTableau implements OnInit {
  dlcs = input<DlcGestionDTO[]>([]);

  dlcToUpdate = output<DlcGestionDTO>();
  dlcToDelete = output<DlcGestionDTO>();

  selectedDlcs = model<DlcGestionDTO[]>();

  private readonly dt = viewChild.required<Table>('dt');

  cols!: Column[];

  ngOnInit(): void {
    this.cols = [
      { field: 'img', header: 'Logo' },
      { field: 'nom', header: 'Nom', customExportHeader: 'Nom du DLC' },
      { field: 'sortie', header: 'Sortie' },
      { field: 'description', header: 'Description' },
      { field: 'type.nom', header: 'Type' },
    ];
  }

  modifierDlc(dlc: DlcGestionDTO) {
    this.dlcToUpdate.emit(dlc);
  }

  supprimerDlc(dlc: DlcGestionDTO) {
    this.dlcToDelete.emit(dlc);
  }

  exportTable(): void {
    this.dt().exportCSV();
  }

  tablePt: TablePassThrough = {
    header: {
      style: {
        backgroundColor: 'transparent',
        border: '0',
      },
    },
  };
}
