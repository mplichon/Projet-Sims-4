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
  ],
  templateUrl: './gestion-dlc-page.html',
  styleUrl: './gestion-dlc-page.css',
})
export class GestionDlcPage implements OnInit {
  gestionDlc: string = 'Gestion des DLC';

  dlcs!: ReponseListeGestionDlcDTO[];
  dlc!: ReponseListeGestionDlcDTO;
  selectedDlcs!: ReponseListeGestionDlcDTO[] | null;

  types!: TypeDlcDTO[];

  dlcDialog: boolean = false;

  submitted: boolean = false;

  cols!: Column[];
  exportColumns!: ExportColumn[];

  @ViewChild('dt') dt!: Table;

  constructor(
    private dlcService: DlcService,
    private cd: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.dlcService.getAllGestion().subscribe((dlcs) => {
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

  modifierDlc(dlc: ReponseListeGestionDlcDTO) {
    this.dlc = { ...dlc };
    this.dlcDialog = true;
  }
}
