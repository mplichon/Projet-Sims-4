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
import { TitreSection } from '../../../component/titre-section/titre-section';
import { Section } from '../../../component/section/section';
import { TraitService } from '../../../services/trait-service';
import { DlcService } from '../../../services/dlc/dlc-service';
import { AspirationService } from '../../../services/aspiration-service';
import { GestionToolbar } from '../../../component/gestion-toolbar/gestion-toolbar';
import { rxResource } from '@angular/core/rxjs-interop';
import { AspirationGestionTableau } from './aspiration-gestion-tableau/aspiration-gestion-tableau';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PopUpSuppressionAspiration } from './pop-up-suppression-aspiration/pop-up-suppression-aspiration';
import { PopUpSuppressionAspirationsSelectionnees } from './pop-up-suppression-aspirations-selectionnees/pop-up-suppression-aspirations-selectionnees';
import { PopUpAjoutModificationGestionAspiration } from './pop-up-ajout-modification-gestion-aspiration/pop-up-ajout-modification-gestion-aspiration';
import { SkeletonModule } from 'primeng/skeleton';
import { AspirationGestionDTO } from '../../../models/aspiration/aspiration-gestion-dto';

@Component({
  selector: 'sims-gestion-aspiration-page',
  imports: [TitreSection, Section, GestionToolbar, AspirationGestionTableau, SkeletonModule],
  providers: [DialogService],
  templateUrl: './gestion-aspiration-page.html',
  styleUrl: './gestion-aspiration-page.css',
})
export class GestionAspirationPage implements OnInit {
  aspirations = rxResource({
    stream: () => this.aspirationService.getAllAspirationGestion(),
  });
  types = rxResource({
    stream: () => this.aspirationService.getAllTypeAspirationSelection(),
  });
  dlcs = rxResource({
    stream: () => this.dlcService.getAllDlcSelection(),
  });
  traitsAspiration = rxResource({
    stream: () => this.traitService.getAllTraitAspirationSelection(),
  });

  readonly aspirationTableau: Signal<AspirationGestionTableau> =
    viewChild.required(AspirationGestionTableau);
  sectionTitle: Signal<string> = signal('Gestion des aspirations');
  selectedAspirations: WritableSignal<AspirationGestionDTO[]> = signal([]);

  isToolbarSupprimerButtonDisabled = computed(() => !this.selectedAspirations()?.length);

  private readonly aspirationService = inject(AspirationService);
  private readonly dlcService = inject(DlcService);
  private readonly traitService = inject(TraitService);
  private readonly dialogService = inject(DialogService);
  private readonly cd = inject(ChangeDetectorRef);

  ref!: DynamicDialogRef | null;

  ngOnInit(): void {
    this.cd.markForCheck();
  }

  exportAspirationsCsv(): void {
    this.aspirationTableau().exportTable();
  }

  ouvrirPopUpNouveauAspiration(): void {
    this.ref = this.dialogService.open(PopUpAjoutModificationGestionAspiration, {
      header: "Ajout d'une aspiration",
      closable: true,
      modal: true,
      draggable: false,
      width: '40%',
      data: {
        types: this.types.value,
        dlcs: this.dlcs.value,
        traitsAspiration: this.traitsAspiration.value,
        isModeEdition: false,
        aspiration: null,
      },
    });
  }

  ouvrirPopUpModifierAspiration(aspiration: AspirationGestionDTO): void {
    this.ref = this.dialogService.open(PopUpAjoutModificationGestionAspiration, {
      header: "Modification d'une aspiration",
      closable: true,
      modal: true,
      draggable: false,
      width: '40%',
      data: {
        types: this.types.value,
        dlcs: this.dlcs.value,
        traitsAspiration: this.traitsAspiration.value,
        isModeEdition: true,
        aspiration: aspiration,
      },
    });
  }

  ouvrirPopUpSuppressionAspiration(aspiration: AspirationGestionDTO): void {
    this.ref = this.dialogService.open(PopUpSuppressionAspiration, {
      header: 'Confirmation',
      modal: true,
      draggable: false,
      width: 'auto',
      data: {
        aspiration: aspiration,
      },
    });
  }

  ouvrirPopUpSuppressionAspirationsSelectionnes(): void {
    this.ref = this.dialogService.open(PopUpSuppressionAspirationsSelectionnees, {
      header: 'Confirmation',
      modal: true,
      draggable: false,
      width: 'auto',
      data: {
        selectedAspirations: this.selectedAspirations,
      },
    });
  }
}
