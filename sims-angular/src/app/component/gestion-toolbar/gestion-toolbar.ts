import { Component, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'sims-gestion-toolbar',
  imports: [ToolbarModule, ButtonModule],
  templateUrl: './gestion-toolbar.html',
  styleUrl: './gestion-toolbar.css',
})
export class GestionToolbar {
  isSupprimerButtonDisabled = input<boolean>(false);

  ouvrirNouveauPopUp = output<void>();
  supprimerSelection = output<void>();
  exportCsv = output<void>();

  onNouveauButton() {
    this.ouvrirNouveauPopUp.emit();
  }

  onSupprimerButton() {
    this.supprimerSelection.emit();
  }

  onExporterButton() {
    this.exportCsv.emit();
  }
}
