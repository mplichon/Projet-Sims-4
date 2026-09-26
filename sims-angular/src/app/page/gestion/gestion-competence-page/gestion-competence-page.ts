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
import { Section } from '../../../component/section/section';
import { TitreSection } from '../../../component/titre-section/titre-section';
import { CompetenceService } from '../../../services/competence-service';
import { SimService } from '../../../services/sim-service';
import { DlcService } from '../../../services/dlc/dlc-service';
import { GestionToolbar } from '../../../component/gestion-toolbar/gestion-toolbar';
import { CompetenceGestionTableau } from './competence-gestion-tableau/competence-gestion-tableau';
import { rxResource } from '@angular/core/rxjs-interop';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PopUpAjoutModificationGestionCompetence } from './pop-up-ajout-modification-gestion-competence/pop-up-ajout-modification-gestion-competence';
import { PopUpSuppressionCompetence } from './pop-up-suppression-competence/pop-up-suppression-competence';
import { PopUpSuppressionCompetencesSelectionnes } from './pop-up-suppression-competences-selectionnes/pop-up-suppression-competences-selectionnes';
import { CompetenceGestionDTO } from '../../../models/competence/competence-gestion-dto';

@Component({
  selector: 'sims-gestion-competence-page',
  imports: [Section, TitreSection, GestionToolbar, CompetenceGestionTableau],
  providers: [DialogService],
  templateUrl: './gestion-competence-page.html',
  styleUrl: './gestion-competence-page.css',
})
export class GestionCompetencePage implements OnInit {
  competences = rxResource({
    stream: () => this.competenceService.getAllCompetenceGestion(),
  });
  dlcs = rxResource({
    stream: () => this.dlcService.getAllDlcSelection(),
  });
  categories = rxResource({
    stream: () => this.simService.getAllCategorieSimGestion(),
  });

  readonly competenceTableau: Signal<CompetenceGestionTableau> =
    viewChild.required(CompetenceGestionTableau);
  sectionTitle: Signal<string> = signal('Gestion des compétences');
  selectedCompetences: WritableSignal<CompetenceGestionDTO[]> = signal([]);

  isToolbarSupprimerButtonDisabled = computed(() => !this.selectedCompetences()?.length);

  private readonly competenceService = inject(CompetenceService);
  private readonly dlcService = inject(DlcService);
  private readonly simService = inject(SimService);
  private readonly dialogService = inject(DialogService);
  private readonly cd = inject(ChangeDetectorRef);

  ref!: DynamicDialogRef | null;

  ngOnInit(): void {
    this.cd.markForCheck();
  }

  exportCompetencesCsv(): void {
    this.competenceTableau().exportTable();
  }

  ouvrirPopUpNouveauCompetence(): void {
    this.ref = this.dialogService.open(PopUpAjoutModificationGestionCompetence, {
      header: "Ajout d'une compétence",
      closable: true,
      modal: true,
      draggable: false,
      width: '40%',
      data: {
        categoriesSims: this.categories.value,
        dlcs: this.dlcs.value,
        isModeEdition: false,
        competence: null,
      },
    });
  }

  ouvrirPopUpModifierCompetence(competence: CompetenceGestionDTO): void {
    this.ref = this.dialogService.open(PopUpAjoutModificationGestionCompetence, {
      header: "Modification d'une compétence",
      closable: true,
      modal: true,
      draggable: false,
      width: '40%',
      data: {
        categoriesSims: this.categories.value,
        dlcs: this.dlcs.value,
        isModeEdition: true,
        competence: competence,
      },
    });
  }

  ouvrirPopUpSuppressionCompetence(competence: CompetenceGestionDTO): void {
    this.ref = this.dialogService.open(PopUpSuppressionCompetence, {
      header: 'Confirmation',
      modal: true,
      draggable: false,
      width: 'auto',
      data: {
        competence: competence,
      },
    });
  }

  ouvrirPopUpSuppressionCompetencesSelectionnes(): void {
    this.ref = this.dialogService.open(PopUpSuppressionCompetencesSelectionnes, {
      header: 'Confirmation',
      modal: true,
      draggable: false,
      width: 'auto',
      data: {
        selectedCompetences: this.selectedCompetences,
      },
    });
  }
}
