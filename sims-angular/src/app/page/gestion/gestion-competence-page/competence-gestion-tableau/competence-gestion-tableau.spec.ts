import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenceGestionTableau } from './competence-gestion-tableau';

describe('CompetenceGestionTableau', () => {
  let component: CompetenceGestionTableau;
  let fixture: ComponentFixture<CompetenceGestionTableau>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompetenceGestionTableau]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetenceGestionTableau);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
