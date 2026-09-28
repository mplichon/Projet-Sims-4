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
import { Section } from '../../../component/section/section';
import { DlcService } from '../../../services/dlc/dlc-service';
import { DlcGestionTableau } from './dlc-gestion-tableau/dlc-gestion-tableau';
import { rxResource } from '@angular/core/rxjs-interop';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PopUpAjoutModificationGestionDlc } from './pop-up-ajout-modification-gestion-dlc/pop-up-ajout-modification-gestion-dlc';
import { PopUpSuppressionDlcsSelectionnes } from './pop-up-suppression-dlcs-selectionnes/pop-up-suppression-dlcs-selectionnes';
import { PopUpSuppressionDlc } from './pop-up-suppression-dlc/pop-up-suppression-dlc';
import { GestionToolbar } from '../../../component/gestion-toolbar/gestion-toolbar';
import { DlcGestionDTO } from '../../../models/dlc/dlc-gestion-dto';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'sims-gestion-dlc-page',
  imports: [TitreSection, Section, DlcGestionTableau, GestionToolbar, SkeletonModule],
  providers: [DialogService],
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
  selectedDlcs: WritableSignal<DlcGestionDTO[]> = signal([]);

  isToolbarSupprimerButtonDisabled = computed(() => !this.selectedDlcs()?.length);

  private readonly dlcService = inject(DlcService);
  private readonly dialogService = inject(DialogService);
  private readonly cd = inject(ChangeDetectorRef);

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

  ouvrirPopUpModifierDlc(dlc: DlcGestionDTO): void {
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

  ouvrirPopUpSuppressionDlc(dlc: DlcGestionDTO): void {
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
      width: 'auto',
      data: {
        selectedDlcs: this.selectedDlcs,
      },
    });
  }
}
