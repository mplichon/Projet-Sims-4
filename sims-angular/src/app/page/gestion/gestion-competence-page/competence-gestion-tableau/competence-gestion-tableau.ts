import { Component, input, model, OnInit, output, viewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { Table, TableModule, TablePassThrough } from 'primeng/table';
import { Column } from '../../../../models/table-models';
import { CompetenceGestionDTO } from '../../../../models/competence/competence-gestion-dto';

@Component({
  selector: 'sims-competence-gestion-tableau',
  imports: [TableModule, IconFieldModule, InputIconModule, InputTextModule, ButtonModule],
  templateUrl: './competence-gestion-tableau.html',
  styleUrl: './competence-gestion-tableau.css',
})
export class CompetenceGestionTableau implements OnInit {
  competences = input<CompetenceGestionDTO[]>([]);

  competenceToUpdate = output<CompetenceGestionDTO>();
  competenceToDelete = output<CompetenceGestionDTO>();

  selectedCompetences = model<CompetenceGestionDTO[]>();

  private readonly dt = viewChild.required<Table>('dt');

  cols!: Column[];

  ngOnInit(): void {
    this.cols = [
      { field: 'logo', header: 'Logo' },
      { field: 'nom', header: 'Nom', customExportHeader: 'Nom de la compétence' },
      { field: 'description', header: 'Description' },
      { field: 'categorie', header: 'Catégorie' },
      { field: 'dlc', header: 'DLC' },
    ];
  }

  modifierCompetence(competence: CompetenceGestionDTO) {
    this.competenceToUpdate.emit(competence);
  }

  supprimerCompetence(competence: CompetenceGestionDTO) {
    this.competenceToDelete.emit(competence);
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
