import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarriereGestionTableau } from './carriere-gestion-tableau';

describe('CarriereGestionTableau', () => {
  let component: CarriereGestionTableau;
  let fixture: ComponentFixture<CarriereGestionTableau>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarriereGestionTableau]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarriereGestionTableau);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
