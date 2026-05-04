import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CarriereMapper } from '../../../mapper/carriere-mapper';
import { DlcService } from '../../../services/dlc-service';
import { CarriereService } from '../../../services/carriere-service';
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
import { ReponseListeGestionCarriereDTO } from '../../../models/carriere/reponse-liste-gestion-carriere-dto';
import { RequeteCreationModificationCarriereDTO } from '../../../models/carriere/requete-creation-modification-carriere-dto';
import { TypeCarriereDTO } from '../../../models/carriere/type-carriere-dto';
import { DlcLegerDTO } from '../../../models/dlc/dlc-leger-dto';
import { Column, ExportColumn } from '../../../models/table-models';
import { RequeteCreationModificationRangCarriereDTO } from '../../../models/carriere/requete-creation-modification-rang-carriere-dto';
import { RequeteCreationModificationBrancheCarriereDTO } from '../../../models/carriere/requete-creation-modification-branche-carriere-dto';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { TabsModule } from 'primeng/tabs';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'sims-gestion-carriere-page',
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
    InputNumberModule,
    CheckboxModule,
    TabsModule,
    AvatarModule,
  ],
  providers: [MessageService, ConfirmationService, CarriereMapper, DlcService, CarriereService],
  templateUrl: './gestion-carriere-page.html',
  styleUrl: './gestion-carriere-page.css',
})
export class GestionCarrierePage implements OnInit {
  gestionCarriere: string = 'Gestion des carrières';

  carrieres!: ReponseListeGestionCarriereDTO[];
  carriere!: RequeteCreationModificationCarriereDTO;
  selectedCarrieres!: ReponseListeGestionCarriereDTO[];

  types!: TypeCarriereDTO[];
  dlcs!: DlcLegerDTO[];
  nbRang!: number;

  hasBranches!: boolean;
  nbRangBranches!: number[];

  carriereDialog: boolean = false;
  carriereDialogTitle: string = "Ajout d'une carriere";

  submitted: boolean = false;

  cols!: Column[];
  exportColumns!: ExportColumn[];

  @ViewChild('dt') dt!: Table;

  supprimerRangButtonDisable = true;
  supprimerExigenceButtonDisable = [true];
  supprimerRangBranchesButtonDisable = [true, true];
  supprimerExigenceBranchesButtonDisable = [[true], [true]];

  constructor(
    private carriereMapper: CarriereMapper,
    private dlcService: DlcService,
    private carriereService: CarriereService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private cd: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.carriereService.getAllCarriereGestion().subscribe((carrieres) => {
      this.carrieres = carrieres;
      this.cd.markForCheck();
    });

    this.carriereService.getAllTypeCarriereSelection().subscribe((types) => {
      this.types = types;
    });

    this.dlcService.getAllDlcSelection().subscribe((dlcs) => {
      this.dlcs = dlcs;
    });

    this.nbRang = 1;
    this.nbRangBranches = [1, 1];

    this.cols = [
      { field: 'logo', header: 'Logo' },
      { field: 'nom', header: 'Nom', customExportHeader: 'Nom de la carrière' },
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
    this.carriere = {
      nom: '',
      description: '',
      img: '',
      type: { code: '', nom: '' },
      rangs: [
        {
          numero: 1,
          titre: '',
          tacheDuJour: '',
          exigencesPourPromotion: [''],
        },
      ],
      branches: [],
    };
    this.ajouterBranches();
    this.hasBranches = false;
    this.nbRang = 1;
    this.submitted = false;
    this.carriereDialogTitle = "Ajout d'une carrière";
    this.carriereDialog = true;
    this.updateSupprimerButtonsDisable();
  }

  modifierCarriere(carriere: ReponseListeGestionCarriereDTO) {
    this.carriereService.getCarriereGestionById(carriere.id).subscribe((c) => {
      this.carriere = this.carriereMapper.toRequeteCreationModificationCarriereDTO(c);
      this.nbRang = this.carriere.rangs.length;
      this.hasBranches = this.carriere.branches && this.carriere.branches.length > 0;

      if (this.hasBranches) {
        this.nbRangBranches = [
          this.carriere.branches[0].rangs.length,
          this.carriere.branches[1].rangs.length,
        ];
      } else {
        this.ajouterBranches();
        this.nbRangBranches = [1, 1];
      }
      this.updateSupprimerButtonsDisable();
    });
    this.carriereDialogTitle = "Modification d'une carrière";
    this.carriereDialog = true;
  }

  cacherDialog() {
    this.carriereDialog = false;
    this.submitted = false;
  }

  enregistrerCarriere() {
    this.submitted = true;

    if (this.carriere.nom?.trim()) {
      if (!this.hasBranches) {
        this.supprimerBranches();
      }
      this.carriereService.saveCarriereGestion(this.carriere);

      if (this.carriere.id) {
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: 'Carrière modifiée',
          life: 3000,
        });
      } else {
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: 'Carrière créée',
          life: 3000,
        });
      }
      this.carriereDialog = false;
    }
  }

  supprimerCarrieresSelectionnes() {
    this.confirmationService.confirm({
      message: 'Êtes-vous sûr de vouloir supprimer les carrières sélectionnées ?',
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
        this.selectedCarrieres.map((c) => this.carriereService.deleteCarriereById(c.id));
        this.selectedCarrieres = [];
        this.messageService.add({
          severity: 'success',
          summary: 'Succcès',
          detail: 'Carrières supprimées',
          life: 3000,
        });
      },
    });
  }

  supprimerCarriere(carriere: ReponseListeGestionCarriereDTO) {
    this.confirmationService.confirm({
      message: 'Êtes-vous sûr de vouloir supprimer la carrière ' + carriere.nom + ' ?',
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
        this.carriereService.deleteCarriereById(carriere.id ? carriere.id : 0);
        this.carriere = {
          nom: '',
          description: '',
          img: '',
          type: { code: '', nom: '' },
          rangs: [
            {
              numero: 1,
              titre: '',
              tacheDuJour: '',
              exigencesPourPromotion: [''],
            },
          ],
          branches: [],
        };
        this.nbRang = 1;
        this.hasBranches = false;
        this.nbRangBranches = [1, 1];
        this.ajouterBranches();

        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: 'Carrière supprimée',
          life: 3000,
        });
      },
    });
  }

  ajouterRang() {
    if (!this.carriere.rangs) {
      this.carriere.rangs = [
        {
          numero: 1,
          titre: '',
          tacheDuJour: '',
          exigencesPourPromotion: [''],
        },
      ];
      this.nbRang = 1;
    } else {
      const rang: RequeteCreationModificationRangCarriereDTO = {
        numero: ++this.nbRang,
        titre: '',
        tacheDuJour: '',
        exigencesPourPromotion: [''],
      };
      this.carriere.rangs.push(rang);
    }
    this.updateSupprimerButtonsDisable();
  }

  supprimerRang() {
    if (this.carriere.rangs) {
      this.carriere.rangs.pop();
      this.nbRang--;
    }
    this.updateSupprimerButtonsDisable();
  }

  ajouterExigence(indice: number) {
    if (!this.carriere.rangs[indice].exigencesPourPromotion) {
      this.carriere.rangs[indice].exigencesPourPromotion = [''];
    } else {
      this.carriere.rangs[indice].exigencesPourPromotion.push('');
    }
    this.updateSupprimerButtonsDisable();
  }

  supprimerExigence(indice: number) {
    if (this.carriere.rangs[indice].exigencesPourPromotion) {
      this.carriere.rangs[indice].exigencesPourPromotion.pop();
    }
    this.updateSupprimerButtonsDisable();
  }

  ajouterBranches() {
    if (this.carriere.branches.length === 0) {
      const brancheVide1: RequeteCreationModificationBrancheCarriereDTO = {
        nom: '',
        description: '',
        img: '',
        rangs: [
          {
            numero: 1,
            titre: '',
            tacheDuJour: '',
            exigencesPourPromotion: [''],
          },
        ],
      };
      const brancheVide2: RequeteCreationModificationBrancheCarriereDTO = {
        nom: '',
        description: '',
        img: '',
        rangs: [
          {
            numero: 1,
            titre: '',
            tacheDuJour: '',
            exigencesPourPromotion: [''],
          },
        ],
      };

      this.carriere.branches.push(brancheVide1, brancheVide2);
    }
  }

  supprimerBranches() {
    this.carriere.branches = [];
  }

  ajouterRangBranche(indiceBranche: number) {
    if (!this.carriere.branches[indiceBranche].rangs) {
      this.carriere.branches[indiceBranche].rangs = [
        {
          numero: 1,
          titre: '',
          tacheDuJour: '',
          exigencesPourPromotion: [''],
        },
      ];
      this.nbRangBranches = [1, 1];
    } else {
      const rang: RequeteCreationModificationRangCarriereDTO = {
        numero: ++this.nbRangBranches[indiceBranche],
        titre: '',
        tacheDuJour: '',
        exigencesPourPromotion: [''],
      };
      this.carriere.branches[indiceBranche].rangs.push(rang);
    }
    this.updateSupprimerButtonsDisable();
  }

  supprimerRangBranche(indiceBranche: number) {
    if (this.carriere.branches[indiceBranche].rangs) {
      this.carriere.branches[indiceBranche].rangs.pop();
      this.nbRangBranches[indiceBranche]--;
    }
    this.updateSupprimerButtonsDisable();
  }

  ajouterExigenceBranche(indiceBranche: number, indiceRang: number) {
    if (!this.carriere.branches[indiceBranche].rangs[indiceRang].exigencesPourPromotion) {
      this.carriere.branches[indiceBranche].rangs[indiceRang].exigencesPourPromotion = [''];
    } else {
      this.carriere.branches[indiceBranche].rangs[indiceRang].exigencesPourPromotion.push('');
    }
    this.updateSupprimerButtonsDisable();
  }

  supprimerExigenceBranche(indiceBranche: number, indiceExigence: number) {
    if (this.carriere.branches[indiceBranche].rangs[indiceExigence].exigencesPourPromotion) {
      this.carriere.branches[indiceBranche].rangs[indiceExigence].exigencesPourPromotion.pop();
    }
    this.updateSupprimerButtonsDisable();
  }

  updateSupprimerButtonsDisable() {
    // Carrière
    this.supprimerRangButtonDisable = !this.carriere.rangs || this.carriere.rangs?.length <= 1;

    if (this.carriere.rangs) {
      this.supprimerExigenceButtonDisable = this.carriere.rangs.map(
        (rang) => !rang.exigencesPourPromotion || rang.exigencesPourPromotion.length <= 1,
      );
    }

    if (this.carriere.branches) {
      this.supprimerRangBranchesButtonDisable = this.carriere.branches.map(
        (branche) => !branche.rangs || branche.rangs.length <= 1,
      );

      this.supprimerExigenceBranchesButtonDisable = this.carriere.branches.map((branche) =>
        branche.rangs.map(
          (rang) => !rang.exigencesPourPromotion || rang.exigencesPourPromotion.length <= 1,
        ),
      );
    }
  }

  exigenceButtonPt: ButtonPassThrough = {
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
