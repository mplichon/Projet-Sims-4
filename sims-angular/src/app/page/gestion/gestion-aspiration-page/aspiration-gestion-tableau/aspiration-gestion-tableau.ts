import { Component, input, model, OnInit, output, viewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { Table, TableModule, TablePassThrough } from 'primeng/table';
import { Column } from '../../../../models/table-models';
import { AspirationGestionDTO } from '../../../../models/aspiration/aspiration-gestion-dto';

@Component({
  selector: 'sims-aspiration-gestion-tableau',
  imports: [TableModule, IconFieldModule, InputIconModule, InputTextModule, ButtonModule],
  templateUrl: './aspiration-gestion-tableau.html',
  styleUrl: './aspiration-gestion-tableau.css',
})
export class AspirationGestionTableau implements OnInit {
  aspirations = input<AspirationGestionDTO[]>([]);

  aspirationToUpdate = output<AspirationGestionDTO>();
  aspirationToDelete = output<AspirationGestionDTO>();

  selectedAspirations = model<AspirationGestionDTO[]>();

  private readonly dt = viewChild.required<Table>('dt');

  cols!: Column[];

  ngOnInit(): void {
    this.cols = [
      { field: 'logo', header: 'Logo' },
      { field: 'nom', header: 'Nom', customExportHeader: "Nom de l'aspiration" },
      { field: 'description', header: 'Description' },
      { field: 'type', header: 'Type' },
      { field: 'dlc', header: 'DLC' },
    ];
  }

  modifierAspiration(aspiration: AspirationGestionDTO) {
    this.aspirationToUpdate.emit(aspiration);
  }

  supprimerAspiration(aspiration: AspirationGestionDTO) {
    this.aspirationToDelete.emit(aspiration);
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
