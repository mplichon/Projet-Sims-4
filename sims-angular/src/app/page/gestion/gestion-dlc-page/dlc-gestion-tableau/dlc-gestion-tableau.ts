import { Component, input, model, OnInit, output, viewChild } from '@angular/core';
import { Table, TableModule, TablePassThrough } from 'primeng/table';
import { ReponseListeGestionDlcDTO } from '../../../../models/dlc/reponse-liste-gestion-dlc-dto';
import { Column } from '../../../../models/table-models';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

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
  dlcs = input<ReponseListeGestionDlcDTO[]>([]);

  dlcToUpdate = output<ReponseListeGestionDlcDTO>();
  dlcToDelete = output<ReponseListeGestionDlcDTO>();

  selectedDlcs = model<ReponseListeGestionDlcDTO[]>();

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

  modifierDlc(dlc: ReponseListeGestionDlcDTO) {
    this.dlcToUpdate.emit(dlc);
  }

  supprimerDlc(dlc: ReponseListeGestionDlcDTO) {
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
