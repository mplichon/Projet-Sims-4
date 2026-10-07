import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpAjoutModificationGestionTrait } from './pop-up-ajout-modification-gestion-trait';

describe('PopUpAjoutModificationGestionTrait', () => {
  let component: PopUpAjoutModificationGestionTrait;
  let fixture: ComponentFixture<PopUpAjoutModificationGestionTrait>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpAjoutModificationGestionTrait]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpAjoutModificationGestionTrait);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
