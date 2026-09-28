import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpAjoutModificationGestionAspiration } from './pop-up-ajout-modification-gestion-aspiration';

describe('PopUpAjoutModificationGestionAspiration', () => {
  let component: PopUpAjoutModificationGestionAspiration;
  let fixture: ComponentFixture<PopUpAjoutModificationGestionAspiration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpAjoutModificationGestionAspiration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpAjoutModificationGestionAspiration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
