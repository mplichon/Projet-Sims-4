import { Component, input } from '@angular/core';

@Component({
  selector: 'sims-titre-section',
  imports: [],
  templateUrl: './titre-section.html',
  styleUrl: './titre-section.css',
})
export class TitreSection {
  titre = input<string>('');
}
