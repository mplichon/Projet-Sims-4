import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpAjoutModificationGestionCarriere } from './pop-up-ajout-modification-gestion-carriere';

describe('PopUpAjoutModificationGestionCarriere', () => {
  let component: PopUpAjoutModificationGestionCarriere;
  let fixture: ComponentFixture<PopUpAjoutModificationGestionCarriere>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpAjoutModificationGestionCarriere]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpAjoutModificationGestionCarriere);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
