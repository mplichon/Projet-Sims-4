import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitGestionTableau } from './trait-gestion-tableau';

describe('TraitGestionTableau', () => {
  let component: TraitGestionTableau;
  let fixture: ComponentFixture<TraitGestionTableau>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraitGestionTableau]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraitGestionTableau);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
