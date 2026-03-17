import { Component } from '@angular/core';
import { Card, CardModule, CardPassThrough } from 'primeng/card';
import { SectionDuSiteCard } from '../../component/section-du-site-card/section-du-site-card';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  imports: [CardModule, SectionDuSiteCard],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  cardPt: CardPassThrough = {
    root: {
      style: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '0.7rem 1.5rem',
        margin: '2.5rem 0',
        borderRadius: '10px',
        display: 'inline-block',
      },
    },
    body: {
      style: {
        padding: '0',
      },
    },
    content: {
      style: {
        color: 'white',
        fontSize: '2.8rem',
        fontWeight: '700',
      },
    },
  };

  dlc = {
    title: 'DLC',
    content:
      'Tout sur les DLC du monde des Sims 4. Connectez-vous pour indiquer ceux que vous possédez.',
    link: '/gestion/dlc',
  };

  competence = {
    title: 'Compétences',
    content:
      'Apprenez à maîtriser toutes les compétences de vos Sims pour débloquer de nouvelles possibilités.',
    link: '/gestion/competence',
  };

  carriere = {
    title: 'Carrières',
    content:
      'Découvrez toutes les professions possibles pour vos Sims et comment les faire évoluer.',
    link: '/gestion/carriere',
  };

  aspiration = {
    title: 'Aspirations',
    content: 'Guide complet des aspirations et des récompenses associées à chaque parcours de vie.',
    link: '/gestion/aspiration',
  };

  trait = {
    title: 'Traits de caractère',
    content: 'Découvrez les traits qui façonnent la personnalité unique de chaque Sim.',
    link: '/gestion/trait',
  };
}
