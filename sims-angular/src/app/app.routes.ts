import { Routes } from '@angular/router';
import { HomePage } from './page/home-page/home-page';
import { GestionDlcPage } from './page/gestion/gestion-dlc-page/gestion-dlc-page';
import { GestionCompetencePage } from './page/gestion/gestion-competence-page/gestion-competence-page';
import { GestionCarrierePage } from './page/gestion/gestion-carriere-page/gestion-carriere-page';
import { GestionTraitPage } from './page/gestion/gestion-trait-page/gestion-trait-page';
import { GestionAspirationPage } from './page/gestion/gestion-aspiration-page/gestion-aspiration-page';

export const routes: Routes = [
  // Routes de l'accueil
  {
    path: '',
    component: HomePage,
    title: 'Accueil | Sims 4 Encyclopédie',
  },

  // Routes de gestion pour les admins
  {
    path: 'gestion/dlc',
    component: GestionDlcPage,
    title: 'DLCs | Sims 4 Encyclopédie',
  },
  {
    path: 'gestion/competence',
    component: GestionCompetencePage,
    title: 'Compétences | Sims 4 Encyclopédie',
  },
  {
    path: 'gestion/carriere',
    component: GestionCarrierePage,
    title: 'Carrières | Sims 4 Encyclopédie',
  },
  {
    path: 'gestion/aspiration',
    component: GestionAspirationPage,
    title: 'Aspirations | Sims 4 Encyclopédie',
  },
  {
    path: 'gestion/trait',
    component: GestionTraitPage,
    title: 'Traits de caractère | Sims 4 Encyclopédie',
  },
];
