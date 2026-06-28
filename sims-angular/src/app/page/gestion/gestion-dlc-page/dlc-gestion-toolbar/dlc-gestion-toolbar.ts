import { Component, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'sims-dlc-gestion-toolbar',
  imports: [ToolbarModule, ButtonModule],
  templateUrl: './dlc-gestion-toolbar.html',
  styleUrl: './dlc-gestion-toolbar.css',
})
export class DlcGestionToolbar {
  isSupprimerButtonDisabled = input<boolean>(false);

  ouvrirNouveauDlcPopUp = output<void>();
  supprimerDlcsSelectionnes = output<void>();
  exportDlcsCsv = output<void>();

  onNouveauButton() {
    this.ouvrirNouveauDlcPopUp.emit();
  }

  onSupprimerButton() {
    this.supprimerDlcsSelectionnes.emit();
  }

  onExporterButton() {
    this.exportDlcsCsv.emit();
  }
}
