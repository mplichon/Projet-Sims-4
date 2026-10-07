import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpAjoutModificationGestionCompetence } from './pop-up-ajout-modification-gestion-competence';

describe('PopUpAjoutModificationGestionCompetence', () => {
  let component: PopUpAjoutModificationGestionCompetence;
  let fixture: ComponentFixture<PopUpAjoutModificationGestionCompetence>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpAjoutModificationGestionCompetence]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpAjoutModificationGestionCompetence);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
