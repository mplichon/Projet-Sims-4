import { ChangeDetectorRef, Component, computed, OnInit, ViewChild } from '@angular/core';
import { TitreSection } from '../../../component/titre-section/titre-section';
import { Table, TableModule, TablePassThrough } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { Section } from '../../../component/section/section';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TraitService } from '../../../services/trait-service';
import { TraitMapper } from '../../../mapper/trait-mapper';
import { ReponseListeGestionTraitDTO } from '../../../models/trait/reponse-liste-gestion-trait-dto';
import { Column, ExportColumn } from '../../../models/table-models';
import { TypeTraitDTO } from '../../../models/trait/type-trait-dto';
import { RequeteCreationModificationTraitDTO } from '../../../models/trait/requete-creation-modification-trait-dto';
import { CategorieSimDTO } from '../../../models/categorie-sim-dto';
import { SimService } from '../../../services/sim-service';
import { DlcService } from '../../../services/dlc-service';
import { DlcLegerDTO } from '../../../models/dlc/dlc-leger-dto';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonGroupModule } from 'primeng/buttongroup';
import {
  TYPES_TRAIT_A_CONDITION,
  TYPES_TRAIT_A_EFFETS,
  TYPES_TRAIT_ASPIRATION,
  TYPES_TRAIT_BONUS,
  TYPES_TRAIT_BOUTIQUE,
  TYPES_TRAIT_EDUCATION,
} from '../../../models/constantes';
import { AspirationService } from '../../../services/aspiration-service';
import { TypeAspirationDTO } from '../../../models/aspiration/type-aspiration-dto';
import { AspirationLegerDTO } from '../../../models/aspiration/aspiration-leger-dto';

@Component({
  selector: 'sims-gestion-trait-page',
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
    InputNumberModule,
    ButtonGroupModule,
  ],
  providers: [
    MessageService,
    ConfirmationService,
    TraitService,
    TraitMapper,
    SimService,
    DlcService,
    AspirationService,
  ],
  templateUrl: './gestion-trait-page.html',
  styleUrl: './gestion-trait-page.css',
})
export class GestionTraitPage implements OnInit {
  gestionTrait: string = 'Gestion des traits de caractère';

  traits!: ReponseListeGestionTraitDTO[];
  trait!: RequeteCreationModificationTraitDTO;
  selectedTraits!: ReponseListeGestionTraitDTO[];

  types!: TypeTraitDTO[];
  categories!: CategorieSimDTO[];
  dlcs!: DlcLegerDTO[];
  typesAspiration!: TypeAspirationDTO[];
  aspirations!: AspirationLegerDTO[];

  traitDialog: boolean = false;
  traitDialogTitle: string = "Ajout d'un trait de caractère";

  submitted: boolean = false;

  cols!: Column[];
  exportColumns!: ExportColumn[];

  typesBoutique = TYPES_TRAIT_BOUTIQUE;
  typesEducation = TYPES_TRAIT_EDUCATION;
  typesACondition = TYPES_TRAIT_A_CONDITION;
  typesAEffets = TYPES_TRAIT_A_EFFETS;
  typesBonus = TYPES_TRAIT_BONUS;
  typesTraitAspiration = TYPES_TRAIT_ASPIRATION;

  @ViewChild('dt') dt!: Table;

  supprimerEffetButtonDisable = true;

  constructor(
    private traitService: TraitService,
    private traitMapper: TraitMapper,
    private simService: SimService,
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
    this.traitService.getAllTraitGestion().subscribe((traits) => {
      this.traits = traits;
      this.cd.markForCheck();
    });

    this.traitService.getAllTypeTraitGestion().subscribe((types) => {
      this.types = types;
    });

    this.simService.getAllCategorieSimGestion().subscribe((categories) => {
      this.categories = categories;
    });

    this.dlcService.getAllDlcSelection().subscribe((dlcs) => {
      this.dlcs = dlcs;
    });

    this.aspirationService.getAllTypeAspirationGestion().subscribe((types) => {
      this.typesAspiration = types;
    });

    this.aspirationService.getAllAspirationSelection().subscribe((aspirations) => {
      this.aspirations = aspirations;
    });

    this.cols = [
      { field: 'logo', header: 'Logo' },
      { field: 'nom', header: 'Nom', customExportHeader: 'Nom du trait' },
      { field: 'description', header: 'Description' },
      { field: 'type', header: 'Type' },
      { field: 'categorieSim', header: 'Catégorie de Sim' },
      { field: 'dlc', header: 'DLC' },
    ];

    this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
  }

  exportCSV() {
    this.dt.exportCSV();
  }

  ouvrirNouveau() {
    this.trait = {
      nom: '',
      description: '',
      img: '',
      type: { code: '', nom: '' },
      categorieSim: { code: '', nom: '' },
      effets: [''],
    };
    this.submitted = false;
    this.traitDialogTitle = "Ajout d'un trait de caractère";
    this.traitDialog = true;
    this.updateSupprimerEffetButtonDisable();
  }

  modifierTrait(trait: ReponseListeGestionTraitDTO) {
    this.traitService.getTraitGestionById(trait.id).subscribe((t) => {
      this.trait = this.traitMapper.toRequeteCreationModificationTraitDTO(t);
    });
    this.traitDialogTitle = "Modification d'un trait de caractère";
    this.traitDialog = true;
    this.updateSupprimerEffetButtonDisable();
  }

  cacherDialog() {
    this.traitDialog = false;
    this.submitted = false;
  }

  enregistrerTrait() {
    this.submitted = true;

    if (this.trait.nom?.trim()) {
      this.traitService.saveTraitGestion(this.trait);

      if (this.trait.id) {
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: 'Trait modifié',
          life: 3000,
        });
      } else {
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: 'Trait créé',
          life: 3000,
        });
      }
      this.traitDialog = false;
    }
  }

  supprimerTraitsSelectionnes() {
    this.confirmationService.confirm({
      message: 'Êtes-vous sûr de vouloir supprimer les traits sélectionnés ?',
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
        this.selectedTraits.map((t) => this.traitService.deleteTraitById(t.id));
        this.selectedTraits = [];
        this.messageService.add({
          severity: 'success',
          summary: 'Succcès',
          detail: 'Traits supprimés',
          life: 3000,
        });
      },
    });
  }

  supprimerTrait(trait: ReponseListeGestionTraitDTO) {
    this.confirmationService.confirm({
      message: 'Êtes-vous sûr de vouloir supprimer le trait ' + trait.nom + ' ?',
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
        this.traitService.deleteTraitById(trait.id ? trait.id : 0);
        this.trait = {
          nom: '',
          description: '',
          img: '',
          type: { code: '', nom: '' },
          categorieSim: { code: '', nom: '' },
          effets: [''],
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

  ajouterEffet() {
    if (!this.trait.effets) {
      this.trait.effets = [];
    }
    this.trait.effets.push('');
    this.updateSupprimerEffetButtonDisable();
  }

  supprimerEffet() {
    if (this.trait.effets) {
      this.trait.effets?.pop();
    }
    this.updateSupprimerEffetButtonDisable();
  }

  updateSupprimerEffetButtonDisable() {
    this.supprimerEffetButtonDisable = !this.trait.effets || this.trait.effets?.length <= 1;
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
