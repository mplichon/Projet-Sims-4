import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TitreSection } from '../../../component/titre-section/titre-section';
import { CommonModule } from '@angular/common';
import { Section } from '../../../component/section/section';

@Component({
  selector: 'sims-gestion-dlc-page',
  imports: [TitreSection, TableModule, CommonModule, Section],
  templateUrl: './gestion-dlc-page.html',
  styleUrl: './gestion-dlc-page.css',
})
export class GestionDlcPage {
  gestionDlc: string = 'Gestion des DLC';

  dlcs = [
    {
      image: 'test',
      nom: 'Au Travail',
      dateSortie: '02/04/2015',
      description: 'test description',
      type: "Pack d'extension",
    },
    {
      image: 'test',
      nom: 'Destination Nature',
      dateSortie: '13/01/2015',
      description: 'test description',
      type: 'Pack de jeu',
    },
  ];
}
