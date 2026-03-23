import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Section } from '../../../component/section/section';
import { TitreSection } from '../../../component/titre-section/titre-section';
import { Column, ExportColumn } from '../../../models/table-models';
import { Table, TableModule, TablePassThrough } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ReponseListeGestionCompetenceDTO } from '../../../models/competence/reponse-liste-gestion-competence-dto';
import { CompetenceService } from '../../../services/competence-service';
import { SimService } from '../../../services/sim-service';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { CommonModule } from '@angular/common';
import { CategorieSimDTO } from '../../../models/categorie-sim-dto';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'sims-gestion-competence-page',
  imports: [
    Section,
    TitreSection,
    ToastModule,
    ToolbarModule,
    CommonModule,
    ButtonModule,
    TableModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
  ],
  providers: [MessageService, ConfirmationService, CompetenceService, SimService],
  templateUrl: './gestion-competence-page.html',
  styleUrl: './gestion-competence-page.css',
})
export class GestionCompetencePage implements OnInit {
  gestionCompetence: string = 'Gestion des compétences';

  competences!: ReponseListeGestionCompetenceDTO[];
  competence!: ReponseListeGestionCompetenceDTO;
  selectedCompetences!: ReponseListeGestionCompetenceDTO[];

  categories!: CategorieSimDTO[];

  competenceDialog: boolean = false;
  competenceDialogTitle: string = "Ajout d'une compétence";

  submitted: boolean = false;

  cols!: Column[];
  exportColumns!: ExportColumn[];

  @ViewChild('dt') dt!: Table;

  constructor(
    private competenceService: CompetenceService,
    private simService: SimService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private cd: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.competenceService.getAllCompetenceGestion().subscribe((competences) => {
      this.competences = competences;
      this.cd.markForCheck();
    });

    this.simService.getAllCategorieSimGestion().subscribe((categories) => {
      this.categories = categories;
    });

    this.cols = [
      { field: 'logo', header: 'Logo' },
      { field: 'nom', header: 'Nom', customExportHeader: 'Nom de la compétence' },
      { field: 'description', header: 'Description' },
      { field: 'categorie', header: 'Catégorie' },
      { field: 'dlc', header: 'DLC' },
    ];

    this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
  }

  exportCSV() {
    this.dt.exportCSV();
  }

  ouvrirNouveau() {}

  modifierDlc(competence: ReponseListeGestionCompetenceDTO) {}

  cacherDialog() {}

  enregistrerDlc() {}

  supprimerDlcsSelectionnes() {}

  supprimerDlc(competence: ReponseListeGestionCompetenceDTO) {}

  tablePt: TablePassThrough = {
    header: {
      style: {
        backgroundColor: 'transparent',
        border: '0',
      },
    },
  };
}
