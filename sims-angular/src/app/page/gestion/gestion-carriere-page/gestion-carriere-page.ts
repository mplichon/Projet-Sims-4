import {
  ChangeDetectorRef,
  Component,
  computed,
  inject,
  OnInit,
  signal,
  Signal,
  viewChild,
  WritableSignal,
} from '@angular/core';
import { DlcService } from '../../../services/dlc/dlc-service';
import { CarriereService } from '../../../services/carriere-service';
import { TitreSection } from '../../../component/titre-section/titre-section';
import { Section } from '../../../component/section/section';
import { GestionToolbar } from '../../../component/gestion-toolbar/gestion-toolbar';
import { CarriereGestionTableau } from './carriere-gestion-tableau/carriere-gestion-tableau';
import { rxResource } from '@angular/core/rxjs-interop';
import { CarriereGestionDTO } from '../../../models/carriere/carriere-gestion-dto';
import { SkeletonModule } from 'primeng/skeleton';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PopUpSuppressionCarrieresSelectionnees } from './pop-up-suppression-carrieres-selectionnees/pop-up-suppression-carrieres-selectionnees';
import { PopUpSuppressionCarriere } from './pop-up-suppression-carriere/pop-up-suppression-carriere';
import { PopUpAjoutModificationGestionCarriere } from './pop-up-ajout-modification-gestion-carriere/pop-up-ajout-modification-gestion-carriere';
import { filter, take, tap } from 'rxjs';

@Component({
  selector: 'sims-gestion-carriere-page',
  imports: [TitreSection, Section, GestionToolbar, CarriereGestionTableau, SkeletonModule],
  providers: [DialogService],
  templateUrl: './gestion-carriere-page.html',
  styleUrl: './gestion-carriere-page.css',
})
export class GestionCarrierePage implements OnInit {
  carrieresV2 = rxResource({
    stream: () => this.carriereService.getAllCarriereGestion(),
  });
  typesV2 = rxResource({
    stream: () => this.carriereService.getAllTypeCarriereSelection(),
  });
  dlcsV2 = rxResource({
    stream: () => this.dlcService.getAllDlcSelection(),
  });

  readonly dlcTableau: Signal<CarriereGestionTableau> = viewChild.required(CarriereGestionTableau);
  sectionTitle: Signal<string> = signal('Gestion des carrières');
  selectedCarrieresV2: WritableSignal<CarriereGestionDTO[]> = signal([]);

  isToolbarSupprimerButtonDisabled = computed(() => !this.selectedCarrieresV2()?.length);

  private readonly carriereService = inject(CarriereService);
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

  ouvrirPopUpNouveauCarriere(): void {
    this.ref = this.dialogService.open(PopUpAjoutModificationGestionCarriere, {
      header: "Ajout d'une carrière",
      closable: true,
      modal: true,
      draggable: false,
      width: '40%',
      data: {
        types: this.typesV2.value,
        dlcs: this.dlcsV2.value,
        isModeEdition: false,
        carriere: null,
      },
    });

    this._refreshCarrieres();
  }

  ouvrirPopUpModifierCarriere(carriere: CarriereGestionDTO): void {
    this.ref = this.dialogService.open(PopUpAjoutModificationGestionCarriere, {
      header: "Modification d'une carrière",
      closable: true,
      modal: true,
      draggable: false,
      width: '40%',
      data: {
        types: this.typesV2.value,
        dlcs: this.dlcsV2.value,
        isModeEdition: true,
        carriere: carriere,
      },
    });

    this._refreshCarrieres();
  }

  ouvrirPopUpSuppressionCarriere(carriere: CarriereGestionDTO): void {
    this.ref = this.dialogService.open(PopUpSuppressionCarriere, {
      header: 'Confirmation',
      modal: true,
      draggable: false,
      width: 'auto',
      data: {
        carriere: carriere,
      },
    });

    this._refreshCarrieres();
  }

  ouvrirPopUpSuppressionCarrieresSelectionnes(): void {
    this.ref = this.dialogService.open(PopUpSuppressionCarrieresSelectionnees, {
      header: 'Confirmation',
      modal: true,
      draggable: false,
      width: 'auto',
      data: {
        selectedCarrieres: this.selectedCarrieresV2,
      },
    });

    this._refreshCarrieres();
  }

  private _refreshCarrieres() {
    this.ref!.onClose.pipe(
      take(1),
      filter((reponse: boolean) => reponse),
      tap(() => this.carrieresV2.reload()),
    ).subscribe();
  }
}
