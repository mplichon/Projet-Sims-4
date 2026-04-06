import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { TitreSection } from '../../../component/titre-section/titre-section';
import { Table, TableModule, TablePassThrough } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { Section } from '../../../component/section/section';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule, ButtonPassThrough } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TraitService } from '../../../services/trait-service';
import { AspirationMapper } from '../../../mapper/aspiration-mapper';
import { DlcService } from '../../../services/dlc-service';
import { AspirationService } from '../../../services/aspiration-service';
import { ReponseListeGestionAspirationDTO } from '../../../models/aspiration/reponse-liste-gestion-aspiration-dto';
import { RequeteCreationModificationAspirationDTO } from '../../../models/aspiration/requete-creation-modification-aspiration-dto';
import { TypeAspirationDTO } from '../../../models/aspiration/type-aspiration-dto';
import { DlcLegerDTO } from '../../../models/dlc/dlc-leger-dto';
import { TraitLegerDTO } from '../../../models/trait/trait-leger-dto';
import { Column, ExportColumn } from '../../../models/table-models';
import { RequeteCreationModificationEtapeAspirationDTO } from '../../../models/aspiration/requete-creation-modification-etape-aspiration-dto';

@Component({
  selector: 'sims-gestion-aspiration-page',
  imports: [
    TitreSection,
    TableModule,
    CommonModule,
    Section,
    ToastModule,
    ToolbarModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    DialogModule,
    FormsModule,
    SelectModule,
    ConfirmDialogModule,
    InputTextModule,
    TextareaModule,
    ButtonGroupModule,
  ],
  providers: [
    MessageService,
    ConfirmationService,
    TraitService,
    AspirationMapper,
    DlcService,
    AspirationService,
  ],
  templateUrl: './gestion-aspiration-page.html',
  styleUrl: './gestion-aspiration-page.css',
})
export class GestionAspirationPage implements OnInit {
  gestionAspiration: string = 'Gestion des aspirations';

  aspirations!: ReponseListeGestionAspirationDTO[];
  aspiration!: RequeteCreationModificationAspirationDTO;
  selectedAspirations!: ReponseListeGestionAspirationDTO[];

  types!: TypeAspirationDTO[];
  dlcs!: DlcLegerDTO[];
  traitsAspiration!: TraitLegerDTO[];
  nbEtape!: number;
  nbSousEtape!: number[];

  aspirationDialog: boolean = false;
  aspirationDialogTitle: string = "Ajout d'une aspiration";

  submitted: boolean = false;

  cols!: Column[];
  exportColumns!: ExportColumn[];

  @ViewChild('dt') dt!: Table;

  supprimerEtapeButtonDisable = true;
  supprimerSousEtapeButtonDisable = [true];

  constructor(
    private traitService: TraitService,
    private aspirationMapper: AspirationMapper,
    private dlcService: DlcService,
    private aspirationService: AspirationService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private cd: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.aspirationService.getAllAspirationGestion().subscribe((aspirations) => {
      this.aspirations = aspirations;
      this.cd.markForCheck();
    });

    this.aspirationService.getAllTypeAspirationSelection().subscribe((types) => {
      this.types = types;
    });

    this.dlcService.getAllDlcSelection().subscribe((dlcs) => {
      this.dlcs = dlcs;
    });

    this.traitService.getAllTraitAspirationSelection().subscribe((traits) => {
      this.traitsAspiration = traits;
    });

    this.nbEtape = 1;
    this.nbSousEtape = [1];

    this.cols = [
      { field: 'logo', header: 'Logo' },
      { field: 'nom', header: 'Nom', customExportHeader: "Nom de l'aspiration" },
      { field: 'description', header: 'Description' },
      { field: 'type', header: 'Type' },
      { field: 'dlc', header: 'DLC' },
    ];

    this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
  }

  exportCSV() {
    this.dt.exportCSV();
  }

  ouvrirNouveau() {
    this.aspiration = {
      nom: '',
      description: '',
      img: '',
      type: { code: '', nom: '', img: '' },
      etapes: [
        {
          numero: 1,
          nom: '',
          sousEtapes: [''],
        },
      ],
    };
    this.nbEtape = 1;
    this.nbSousEtape = [1];
    this.submitted = false;
    this.aspirationDialogTitle = "Ajout d'une aspiration";
    this.aspirationDialog = true;
    this.updateSupprimerButtonsDisable();
  }

  modifierAspiration(aspiration: ReponseListeGestionAspirationDTO) {
    this.aspirationService.getAspirationGestionById(aspiration.id).subscribe((a) => {
      this.aspiration = this.aspirationMapper.toRequeteCreationModificationAspirationDTO(a);
      this.nbEtape = this.aspiration.etapes.length;
      this.updateSupprimerButtonsDisable();
    });
    this.aspirationDialogTitle = "Modification d'une aspiration";
    this.aspirationDialog = true;
  }

  cacherDialog() {
    this.aspirationDialog = false;
    this.submitted = false;
  }

  enregistrerAspiration() {
    this.submitted = true;

    if (this.aspiration.nom?.trim()) {
      this.aspirationService.saveAspirationGestion(this.aspiration);

      if (this.aspiration.id) {
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: 'Aspiration modifiée',
          life: 3000,
        });
      } else {
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: 'Aspiration créée',
          life: 3000,
        });
      }
      this.aspirationDialog = false;
    }
  }

  supprimerAspirationsSelectionnes() {
    this.confirmationService.confirm({
      message: 'Êtes-vous sûr de vouloir supprimer les aspirations sélectionnées ?',
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
        this.selectedAspirations.map((a) => this.traitService.deleteTraitById(a.id));
        this.selectedAspirations = [];
        this.messageService.add({
          severity: 'success',
          summary: 'Succcès',
          detail: 'Aspirations supprimées',
          life: 3000,
        });
      },
    });
  }

  supprimerAspiration(aspiration: ReponseListeGestionAspirationDTO) {
    this.confirmationService.confirm({
      message: "Êtes-vous sûr de vouloir supprimer l'aspiration " + aspiration.nom + ' ?',
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
        this.aspirationService.deleteAspirationById(aspiration.id ? aspiration.id : 0);
        this.aspiration = {
          nom: '',
          description: '',
          img: '',
          type: { code: '', nom: '', img: '' },
          etapes: [
            {
              numero: 1,
              nom: '',
              sousEtapes: [''],
            },
          ],
        };
        this.nbEtape = 1;
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: 'Aspiration supprimée',
          life: 3000,
        });
      },
    });
  }

  ajouterEtape() {
    if (!this.aspiration.etapes) {
      this.aspiration.etapes = [
        {
          numero: 1,
          nom: '',
          sousEtapes: [''],
        },
      ];
      this.nbEtape = 1;
      this.nbSousEtape = [1];
    } else {
      const etape: RequeteCreationModificationEtapeAspirationDTO = {
        numero: ++this.nbEtape,
        nom: '',
        sousEtapes: [''],
      };
      this.aspiration.etapes.push(etape);
      this.nbSousEtape.push(1);
    }
    this.updateSupprimerButtonsDisable();
  }

  supprimerEtape() {
    if (this.aspiration.etapes) {
      this.aspiration.etapes.pop();
      this.nbEtape--;
      this.nbSousEtape.pop();
    }
    this.updateSupprimerButtonsDisable();
  }

  ajouterSousEtape(indice: number) {
    if (!this.aspiration.etapes[indice].sousEtapes) {
      this.aspiration.etapes[indice].sousEtapes = [''];
      this.nbSousEtape.push(1);
    } else {
      this.aspiration.etapes[indice].sousEtapes.push('');
      this.nbSousEtape[indice]++;
    }
    this.updateSupprimerButtonsDisable();
  }

  supprimerSousEtape(indice: number) {
    if (this.aspiration.etapes[indice].sousEtapes) {
      this.aspiration.etapes[indice].sousEtapes.pop();
      this.nbSousEtape[indice]--;
    }
    this.updateSupprimerButtonsDisable();
  }

  updateSupprimerButtonsDisable() {
    this.supprimerEtapeButtonDisable =
      !this.aspiration.etapes || this.aspiration.etapes?.length <= 1;

    if (this.aspiration.etapes) {
      this.supprimerSousEtapeButtonDisable = this.aspiration.etapes.map(
        (etape) => !etape.sousEtapes || etape.sousEtapes.length <= 1,
      );
    }
  }

  sousEtapeButtonPt: ButtonPassThrough = {
    root: {
      style: {
        height: '20px',
        width: '20px',
      },
    },
  };

  tablePt: TablePassThrough = {
    header: {
      style: {
        backgroundColor: 'transparent',
        border: '0',
      },
    },
  };
}
