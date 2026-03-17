import { Component, input } from '@angular/core';

@Component({
  selector: 'sims-titre-section',
  imports: [],
  templateUrl: './titre-section.html',
  styleUrl: './titre-section.css',
})
export class TitreSection {
  titre = input<string>('');

  titreStyle = {
    fontSize: '2rem',
    fontWeight: '700',
    color: 'var(--secondary-color)',
    margin: '1.5rem 0',
    borderLeft: '6px solid var(--primary-color)',
    paddingLeft: '0.7rem',
  };
}
