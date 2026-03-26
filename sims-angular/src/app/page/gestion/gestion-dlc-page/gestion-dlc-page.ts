import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Table, TableModule, TablePassThrough } from 'primeng/table';
import { TitreSection } from '../../../component/titre-section/titre-section';
import { CommonModule } from '@angular/common';
import { Section } from '../../../component/section/section';
import { DlcService } from '../../../services/dlc-service';
import { ReponseListeGestionDlcDTO } from '../../../models/dlc/reponse-liste-gestion-dlc-dto';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { Column, ExportColumn } from '../../../models/table-models';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TagModule } from 'primeng/tag';
import { DialogModule, DialogPassThrough } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { SelectModule, SelectPassThrough } from 'primeng/select';
import { TypeDlcDTO } from '../../../models/dlc/type-dlc-dto';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ConfirmationService, MessageService, PassThrough } from 'primeng/api';
import { RequeteCreationModificationDlcDTO } from '../../../models/dlc/requete-creation-modification-dlc-dto';
import { DatePickerModule, DatePickerPassThrough } from 'primeng/datepicker';
import { DlcMapper } from '../../../mapper/dlc-mapper';
import { RequeteCreationModificationDlcWithDateDTO } from '../../../models/dlc/requete-creation-modification-dlc-with-date-dto';

@Component({
  selector: 'sims-gestion-dlc-page',
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
    TagModule,
    DialogModule,
    FormsModule,
    SelectModule,
    ConfirmDialogModule,
    InputTextModule,
    TextareaModule,
    DatePickerModule,
  ],
  providers: [MessageService, ConfirmationService, DlcService, DlcMapper],
  templateUrl: './gestion-dlc-page.html',
  styleUrl: './gestion-dlc-page.css',
})
export class GestionDlcPage implements OnInit {
  gestionDlc: string = 'Gestion des DLCs';

  dlcs!: ReponseListeGestionDlcDTO[];
  dlc!: RequeteCreationModificationDlcWithDateDTO;
  selectedDlcs!: ReponseListeGestionDlcDTO[];

  types!: TypeDlcDTO[];

  dlcDialog: boolean = false;
  dlcDialogTitle: string = "Ajout d'un DLC";

  submitted: boolean = false;

  cols!: Column[];
  exportColumns!: ExportColumn[];

  @ViewChild('dt') dt!: Table;

  constructor(
    private dlcService: DlcService,
    private dlcMapper: DlcMapper,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private cd: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.dlcService.getAllDlcGestion().subscribe((dlcs) => {
      this.dlcs = dlcs;
      this.cd.markForCheck();
    });

    this.dlcService.getAllTypeDlcGestion().subscribe((types) => {
      this.types = types;
    });

    this.cols = [
      { field: 'logo', header: 'Logo' },
      { field: 'nom', header: 'Nom', customExportHeader: 'Nom du DLC' },
      { field: 'sortie', header: 'Sortie' },
      { field: 'description', header: 'Description' },
      { field: 'type', header: 'Type' },
    ];

    this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
  }

  exportCSV() {
    this.dt.exportCSV();
  }

  ouvrirNouveau() {
    this.dlc = { nom: '', description: '', img: '', type: { code: '', nom: '', couleur: '' } };
    this.submitted = false;
    this.dlcDialogTitle = "Ajout d'un DLC";
    this.dlcDialog = true;
  }

  modifierDlc(dlc: ReponseListeGestionDlcDTO) {
    this.dlc = this.dlcMapper.toRequeteCreationModificationDlcWithDateDTO(dlc);
    this.dlcDialogTitle = "Modification d'un DLC";
    this.dlcDialog = true;
  }

  cacherDialog() {
    this.dlcDialog = false;
    this.submitted = false;
  }

  enregistrerDlc() {
    this.submitted = true;

    if (this.dlc.nom?.trim()) {
      const dlcWithStringDate = this.dlcMapper.toRequeteCreationModificationDlcDTO(this.dlc);
      this.dlcService.saveDlcGestion(dlcWithStringDate);

      if (this.dlc.id) {
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: 'DLC modifié',
          life: 3000,
        });
      } else {
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: 'DLC créé',
          life: 3000,
        });
      }
      this.dlcDialog = false;
    }
  }

  supprimerDlcsSelectionnes() {
    this.confirmationService.confirm({
      message: 'Êtes-vous sûr de vouloir supprimer les DLCs sélectionnés ?',
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
        this.selectedDlcs.map((d) => this.dlcService.deleteDlcById(d.id));
        this.selectedDlcs = [];
        this.messageService.add({
          severity: 'success',
          summary: 'Succcès',
          detail: 'Dlcs supprimés',
          life: 3000,
        });
      },
    });
  }

  supprimerDlc(dlc: RequeteCreationModificationDlcDTO) {
    this.confirmationService.confirm({
      message: 'Êtes-vous sûr de vouloir supprimer le DLC ' + dlc.nom + ' ?',
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
        this.dlcService.deleteDlcById(dlc.id ? dlc.id : 0);
        this.dlc = {
          nom: '',
          description: '',
          img: '',
          type: { code: '', nom: '', couleur: '' },
        };
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: 'Dlc supprimé',
          life: 3000,
        });
      },
    });
  }

  datepickerPt: DatePickerPassThrough = {
    header: {
      style: {
        fontSize: '0.9rem',
        height: '1.6rem',
      },
    },
    tableHeader: {
      style: {
        fontSize: '0.9rem',
        height: '1rem',
      },
    },
    table: {
      style: {
        fontSize: '0.85rem',
        height: '1rem',
      },
    },
    weekDayCell: {
      style: {
        padding: '0',
      },
    },
    dayCell: {
      style: {
        padding: '0',
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
