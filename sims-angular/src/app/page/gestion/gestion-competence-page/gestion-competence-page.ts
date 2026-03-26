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
import { RequeteCreationModificationCompetenceDTO } from '../../../models/competence/requete-creation-modification-competence-dto';
import { CompetenceMapper } from '../../../mapper/competence-mapper';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { DlcLegerDTO } from '../../../models/dlc/dlc-leger-dto';
import { DlcService } from '../../../services/dlc-service';

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
    DialogModule,
    ConfirmDialogModule,
    FormsModule,
    InputNumberModule,
    SelectModule,
    TextareaModule,
  ],
  providers: [
    MessageService,
    ConfirmationService,
    CompetenceService,
    CompetenceMapper,
    SimService,
    DlcService,
  ],
  templateUrl: './gestion-competence-page.html',
  styleUrl: './gestion-competence-page.css',
})
export class GestionCompetencePage implements OnInit {
  gestionCompetence: string = 'Gestion des compétences';

  competences!: ReponseListeGestionCompetenceDTO[];
  competence!: RequeteCreationModificationCompetenceDTO;
  selectedCompetences!: ReponseListeGestionCompetenceDTO[];

  categories!: CategorieSimDTO[];
  dlcs!: DlcLegerDTO[];

  competenceDialog: boolean = false;
  competenceDialogTitle: string = "Ajout d'une compétence";

  submitted: boolean = false;

  cols!: Column[];
  exportColumns!: ExportColumn[];

  @ViewChild('dt') dt!: Table;

  constructor(
    private competenceService: CompetenceService,
    private competenceMapper: CompetenceMapper,
    private simService: SimService,
    private dlcService: DlcService,
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

    this.dlcService.getAllDlcSelection().subscribe((dlcs) => {
      this.dlcs = dlcs;
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

  ouvrirNouveau() {
    this.competence = {
      nom: '',
      description: '',
      img: '',
      categorieSim: { code: '', nom: '' },
    };
    this.submitted = false;
    this.competenceDialogTitle = "Ajout d'une compétence";
    this.competenceDialog = true;
  }

  modifierDlc(competence: ReponseListeGestionCompetenceDTO) {
    this.competenceService.getCompetenceGestionById(competence.id).subscribe((comp) => {
      this.competence = this.competenceMapper.toRequeteCreationModificationCompetenceDTO(comp);
    });
    this.competenceDialogTitle = "Modification d'une compétence";
    this.competenceDialog = true;
  }

  cacherDialog() {
    this.competenceDialog = false;
    this.submitted = false;
  }

  enregistrerDlc() {
    this.submitted = true;

    if (this.competence.nom?.trim()) {
      this.competenceService.saveCompetenceGestion(this.competence);

      if (this.competence.id) {
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: 'Compétence modifiée',
          life: 3000,
        });
      } else {
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: 'Compétence créée',
          life: 3000,
        });
      }
      this.competenceDialog = false;
    }
  }

  supprimerDlcsSelectionnes() {
    this.confirmationService.confirm({
      message: 'Êtes-vous sûr de vouloir supprimer les compétences sélectionnées ?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      rejectButtonProps: {
        label: 'Non',
        severity: 'secondary',
        variant: 'text',
      },
      acceptButtonProps: {
        severity: 'danger',
        label: 'Oui',
      },
      accept: () => {
        this.selectedCompetences.map((c) => this.competenceService.deleteCompetenceById(c.id));
        this.selectedCompetences = [];
        this.messageService.add({
          severity: 'success',
          summary: 'Succcès',
          detail: 'Compétences supprimées',
          life: 3000,
        });
      },
    });
  }

  supprimerDlc(competence: ReponseListeGestionCompetenceDTO) {
    this.confirmationService.confirm({
      message: 'Êtes-vous sûr de vouloir supprimer la compétence ' + competence.nom + ' ?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      rejectButtonProps: {
        label: 'Non',
        severity: 'secondary',
        variant: 'text',
      },
      acceptButtonProps: {
        severity: 'danger',
        label: 'Oui',
      },
      accept: () => {
        this.competenceService.deleteCompetenceById(competence.id ? competence.id : 0);
        this.competence = {
          nom: '',
          description: '',
          img: '',
          categorieSim: { code: '', nom: '' },
        };
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: 'Compétence supprimée',
          life: 3000,
        });
      },
    });
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
