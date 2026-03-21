import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { TitreSection } from '../../../component/titre-section/titre-section';
import { CommonModule } from '@angular/common';
import { Section } from '../../../component/section/section';
import { DlcService } from '../../../services/dlc-service';
import { ReponseListeGestionDlcDTO } from '../../../models/dlc/reponse-liste-gestion-dlc-dto';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { Column, ExportColumn } from '../../../models/dlc/table-models';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { TypeDlcDTO } from '../../../models/dlc/type-dlc-dto';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ConfirmationService, MessageService } from 'primeng/api';
import { RequeteCreationModificationDlcDTO } from '../../../models/dlc/requete-creation-modification-dlc-dto';
import { DatePickerModule } from 'primeng/datepicker';
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
  gestionDlc: string = 'Gestion des DLC';

  dlcs!: ReponseListeGestionDlcDTO[];
  dlc!: RequeteCreationModificationDlcWithDateDTO;
  selectedDlcs!: ReponseListeGestionDlcDTO[];

  types!: TypeDlcDTO[];

  dlcDialog: boolean = false;

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
    this.dlc = { nom: '', description: '', img: '', type: { code: '', nom: '' } };
    this.submitted = false;
    this.dlcDialog = true;
  }

  modifierDlc(dlc: ReponseListeGestionDlcDTO) {
    this.dlc = this.dlcMapper.toRequeteCreationModificationDlcWithDateDTO(dlc);
    this.dlcDialog = true;
  }

  cacherDialog() {
    this.dlcDialog = false;
    this.submitted = false;
  }

  sauvegarderDlc() {
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
      message: 'Êtes-vous sûr de vouloir supprimer  les DLCs sélectionnés ?',
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
        this.selectedDlcs.map((d) => this.dlcService.deleteById(d.id));
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
      message: 'Êtes-vous sûr de vouloir supprimer ' + dlc.nom + ' ?',
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
        this.dlcService.deleteById(dlc.id ? dlc.id : 0);
        this.dlc = {
          nom: '',
          description: '',
          img: '',
          type: { code: '', nom: '' },
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

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.dlcs.length; i++) {
      if (this.dlcs[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }
}
