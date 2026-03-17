import { Component, input } from '@angular/core';
import { CardModule, CardPassThrough } from 'primeng/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'sims-section-du-site-card',
  imports: [CardModule, RouterLink],
  templateUrl: './section-du-site-card.html',
  styleUrl: './section-du-site-card.css',
})
export class SectionDuSiteCard {
  title = input<string>('');
  content = input<string>('');
  link = input<string>('');

  cardPt: CardPassThrough = {
    root: {
      class: 'section-du-site-card',
      style: {
        borderRadius: '16px',
        backgroundColor: 'white',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      },
    },
    body: {
      style: {
        padding: '0',
      },
    },
    title: {
      style: {
        margin: '0.8rem 1rem 0 1rem',
        color: 'var(--secondary-color)',
        fontSize: '1.3rem',
      },
    },
    content: {
      style: {
        margin: '0 1rem 1.2rem',
        fontSize: '0.95rem',
        color: 'var(--base-color)',
      },
    },
  };
}
