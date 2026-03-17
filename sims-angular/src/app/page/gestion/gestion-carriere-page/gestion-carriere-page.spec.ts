import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCarrierePage } from './gestion-carriere-page';

describe('GestionCarrierePage', () => {
  let component: GestionCarrierePage;
  let fixture: ComponentFixture<GestionCarrierePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionCarrierePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionCarrierePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
