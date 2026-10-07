import { Component, input, model, OnInit, output, viewChild } from '@angular/core';
import { TraitGestionDTO } from '../../../../models/trait/trait-gestion-dto';
import { Table, TableModule, TablePassThrough } from 'primeng/table';
import { Column } from '../../../../models/table-models';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'sims-trait-gestion-tableau',
  imports: [TableModule, IconFieldModule, InputIconModule, InputTextModule, ButtonModule],
  templateUrl: './trait-gestion-tableau.html',
  styleUrl: './trait-gestion-tableau.css',
})
export class TraitGestionTableau implements OnInit {
  traits = input<TraitGestionDTO[]>([]);

  traitToUpdate = output<TraitGestionDTO>();
  traitToDelete = output<TraitGestionDTO>();

  selectedTraits = model<TraitGestionDTO[]>();

  private readonly dt = viewChild.required<Table>('dt');

  cols!: Column[];

  ngOnInit(): void {
    this.cols = [
      { field: 'logo', header: 'Logo' },
      { field: 'nom', header: 'Nom', customExportHeader: 'Nom du trait' },
      { field: 'description', header: 'Description' },
      { field: 'type', header: 'Type' },
      { field: 'categorieSim', header: 'Catégorie de Sim' },
      { field: 'dlc', header: 'DLC' },
    ];
  }

  modifierTrait(trait: TraitGestionDTO) {
    this.traitToUpdate.emit(trait);
  }

  supprimerTrait(trait: TraitGestionDTO) {
    this.traitToDelete.emit(trait);
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
