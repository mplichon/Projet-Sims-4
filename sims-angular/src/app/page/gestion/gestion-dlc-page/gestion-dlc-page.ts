import {
  ChangeDetectorRef,
  Component,
  computed,
  inject,
  OnInit,
  Signal,
  signal,
  viewChild,
  WritableSignal,
} from '@angular/core';
import { TitreSection } from '../../../component/titre-section/titre-section';
import { CommonModule } from '@angular/common';
import { Section } from '../../../component/section/section';
import { DlcService } from '../../../services/dlc/dlc-service';
import { ReponseListeGestionDlcDTO } from '../../../models/dlc/reponse-liste-gestion-dlc-dto';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DlcGestionTableau } from './dlc-gestion-tableau/dlc-gestion-tableau';
import { DlcGestionToolbar } from './dlc-gestion-toolbar/dlc-gestion-toolbar';
import { rxResource } from '@angular/core/rxjs-interop';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PopUpAjoutModificationGestionDlc } from './pop-up-ajout-modification-gestion-dlc/pop-up-ajout-modification-gestion-dlc';
import { PopUpSuppressionDlcsSelectionnes } from './pop-up-suppression-dlcs-selectionnes/pop-up-suppression-dlcs-selectionnes';
import { PopUpSuppressionDlc } from './pop-up-suppression-dlc/pop-up-suppression-dlc';

@Component({
  selector: 'sims-gestion-dlc-page',
  imports: [TitreSection, CommonModule, Section, ToastModule, DlcGestionTableau, DlcGestionToolbar],
  providers: [MessageService, DialogService],
  templateUrl: './gestion-dlc-page.html',
  styleUrl: './gestion-dlc-page.css',
})
export class GestionDlcPage implements OnInit {
  dlcs = rxResource({
    stream: () => this.dlcService.getAllDlcGestion(),
  });
  types = rxResource({
    stream: () => this.dlcService.getAllTypeDlcGestion(),
  });

  readonly dlcTableau: Signal<DlcGestionTableau> = viewChild.required(DlcGestionTableau);
  sectionTitle: Signal<string> = signal('Gestion des DLCs');
  selectedDlcsV2: WritableSignal<ReponseListeGestionDlcDTO[]> = signal([]);

  isToolbarSupprimerButtonDisabled = computed(() => !this.selectedDlcsV2()?.length);

  dlcService = inject(DlcService);
  messageService = inject(MessageService);
  dialogService = inject(DialogService);
  cd = inject(ChangeDetectorRef);

  ref!: DynamicDialogRef | null;

  ngOnInit(): void {
    this.cd.markForCheck();
  }

  exportDlcsCsv(): void {
    this.dlcTableau().exportTable();
  }

  ouvrirPopUpNouveauDlc(): void {
    this.ref = this.dialogService.open(PopUpAjoutModificationGestionDlc, {
      header: "Ajout d'un DLC",
      closable: true,
      modal: true,
      draggable: false,
      width: '40%',
      data: {
        types: this.types.value,
        isModeEdition: false,
        dlc: null,
      },
    });
  }

  ouvrirPopUpModifierDlc(dlc: ReponseListeGestionDlcDTO): void {
    this.ref = this.dialogService.open(PopUpAjoutModificationGestionDlc, {
      header: "Modification d'un DLC",
      closable: true,
      modal: true,
      draggable: false,
      width: '40%',
      data: {
        types: this.types.value,
        isModeEdition: true,
        dlc: dlc,
      },
    });
  }

  ouvrirPopUpSuppressionDlc(dlc: ReponseListeGestionDlcDTO): void {
    this.ref = this.dialogService.open(PopUpSuppressionDlc, {
      header: 'Confirmation',
      modal: true,
      draggable: false,
      width: 'auto',
      data: {
        dlc: dlc,
      },
    });
  }

  ouvrirPopUpSuppressionDlcsSelectionnes(): void {
    this.ref = this.dialogService.open(PopUpSuppressionDlcsSelectionnes, {
      header: 'Confirmation',
      modal: true,
      draggable: false,
      width: '37%',
      data: {
        selectedDlcs: this.selectedDlcsV2,
      },
    });
  }
}
