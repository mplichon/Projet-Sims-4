import { Component, input, model, OnInit, output, viewChild } from '@angular/core';
import { Table, TableModule, TablePassThrough } from 'primeng/table';
import { CarriereGestionDTO } from '../../../../models/carriere/carriere-gestion-dto';
import { Column } from '../../../../models/table-models';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'sims-carriere-gestion-tableau',
  imports: [TableModule, IconFieldModule, InputIconModule, InputTextModule, ButtonModule],
  templateUrl: './carriere-gestion-tableau.html',
  styleUrl: './carriere-gestion-tableau.css',
})
export class CarriereGestionTableau implements OnInit {
  carrieres = input<CarriereGestionDTO[]>([]);

  carriereToUpdate = output<CarriereGestionDTO>();
  carriereToDelete = output<CarriereGestionDTO>();

  selectedCarrieres = model<CarriereGestionDTO[]>();

  private readonly dt = viewChild.required<Table>('dt');

  cols!: Column[];

  ngOnInit(): void {
    this.cols = [
      { field: 'logo', header: 'Logo' },
      { field: 'nom', header: 'Nom', customExportHeader: 'Nom de la carrière' },
      { field: 'description', header: 'Description' },
      { field: 'type', header: 'Type' },
      { field: 'dlc', header: 'DLC' },
    ];
  }

  modifierCarriere(carriere: CarriereGestionDTO) {
    this.carriereToUpdate.emit(carriere);
  }

  supprimerCarriere(carriere: CarriereGestionDTO) {
    this.carriereToDelete.emit(carriere);
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
