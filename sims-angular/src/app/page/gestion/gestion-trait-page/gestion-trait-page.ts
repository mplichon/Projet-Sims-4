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
import { SimService } from '../../../services/sim-service';
import { DlcService } from '../../../services/dlc/dlc-service';
import { AspirationService } from '../../../services/aspiration-service';
import { GestionToolbar } from '../../../component/gestion-toolbar/gestion-toolbar';
import { SkeletonModule } from 'primeng/skeleton';
import { TraitGestionDTO } from '../../../models/trait/trait-gestion-dto';
import { TraitGestionTableau } from './trait-gestion-tableau/trait-gestion-tableau';
import { rxResource } from '@angular/core/rxjs-interop';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { filter, take, tap } from 'rxjs';
import { PopUpAjoutModificationGestionTrait } from './pop-up-ajout-modification-gestion-trait/pop-up-ajout-modification-gestion-trait';
import { PopUpSuppressionTraitsSelectionnes } from './pop-up-suppression-traits-selectionnes/pop-up-suppression-traits-selectionnes';
import { PopUpSuppressionTrait } from './pop-up-suppression-trait/pop-up-suppression-trait';

@Component({
  selector: 'sims-gestion-trait-page',
  imports: [TitreSection, Section, GestionToolbar, TraitGestionTableau, SkeletonModule],
  providers: [DialogService],
  templateUrl: './gestion-trait-page.html',
  styleUrl: './gestion-trait-page.css',
})
export class GestionTraitPage implements OnInit {
  traits = rxResource({
    stream: () => this.traitService.getAllTraitGestion(),
  });
  types = rxResource({
    stream: () => this.traitService.getAllTypeTraitGestion(),
  });
  dlcs = rxResource({
    stream: () => this.dlcService.getAllDlcSelection(),
  });
  categories = rxResource({
    stream: () => this.simService.getAllCategorieSimGestion(),
  });
  typesAspiration = rxResource({
    stream: () => this.aspirationService.getAllTypeAspirationSelection(),
  });
  aspirations = rxResource({
    stream: () => this.aspirationService.getAllAspirationSelection(),
  });

  readonly traitTableau: Signal<TraitGestionTableau> = viewChild.required(TraitGestionTableau);
  sectionTitle: Signal<string> = signal('Gestion des traits de caractère');
  selectedTraits: WritableSignal<TraitGestionDTO[]> = signal([]);

  isToolbarSupprimerButtonDisabled = computed(() => !this.selectedTraits()?.length);

  private readonly traitService = inject(TraitService);
  private readonly dlcService = inject(DlcService);
  private readonly simService = inject(SimService);
  private readonly aspirationService = inject(AspirationService);
  private readonly dialogService = inject(DialogService);
  private readonly cd = inject(ChangeDetectorRef);

  ref!: DynamicDialogRef | null;

  ngOnInit(): void {
    this.cd.markForCheck();
  }

  exportTraitsCsv(): void {
    this.traitTableau().exportTable();
  }

  ouvrirPopUpNouveauTrait(): void {
    this.ref = this.dialogService.open(PopUpAjoutModificationGestionTrait, {
      header: "Ajout d'un trait de caractère",
      closable: true,
      modal: true,
      draggable: false,
      width: '40%',
      data: {
        types: this.types.value,
        categories: this.categories.value,
        dlcs: this.dlcs.value,
        typesAspiration: this.typesAspiration.value,
        aspirations: this.aspirations.value,
        isModeEdition: false,
        trait: null,
      },
    });

    this._refreshTraits();
  }

  ouvrirPopUpModifierTrait(trait: TraitGestionDTO): void {
    this.ref = this.dialogService.open(PopUpAjoutModificationGestionTrait, {
      header: "Modification d'un trait de caractère",
      closable: true,
      modal: true,
      draggable: false,
      width: '40%',
      data: {
        types: this.types.value,
        categories: this.categories.value,
        dlcs: this.dlcs.value,
        typesAspiration: this.typesAspiration.value,
        aspirations: this.aspirations.value,
        isModeEdition: true,
        trait: trait,
      },
    });

    this._refreshTraits();
  }

  ouvrirPopUpSuppressionTrait(trait: TraitGestionDTO): void {
    this.ref = this.dialogService.open(PopUpSuppressionTrait, {
      header: 'Confirmation',
      modal: true,
      draggable: false,
      width: 'auto',
      data: {
        trait: trait,
      },
    });

    this._refreshTraits();
  }

  ouvrirPopUpSuppressionTraitsSelectionnes(): void {
    this.ref = this.dialogService.open(PopUpSuppressionTraitsSelectionnes, {
      header: 'Confirmation',
      modal: true,
      draggable: false,
      width: 'auto',
      data: {
        selectedTraits: this.selectedTraits,
      },
    });

    this._refreshTraits();
  }

  private _refreshTraits() {
    this.ref!.onClose.pipe(
      take(1),
      filter((reponse: boolean) => reponse),
      tap(() => this.traits.reload()),
    ).subscribe();
  }
}
