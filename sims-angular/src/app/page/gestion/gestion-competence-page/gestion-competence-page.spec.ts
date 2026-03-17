import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCompetencePage } from './gestion-competence-page';

describe('GestionCompetencePage', () => {
  let component: GestionCompetencePage;
  let fixture: ComponentFixture<GestionCompetencePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionCompetencePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionCompetencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
