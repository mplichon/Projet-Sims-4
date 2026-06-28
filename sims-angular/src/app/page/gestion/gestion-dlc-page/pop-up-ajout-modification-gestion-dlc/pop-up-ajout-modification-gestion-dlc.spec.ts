import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpAjoutModificationGestionDlc } from './pop-up-ajout-modification-gestion-dlc';

describe('PopUpAjoutModificationGestionDlc', () => {
  let component: PopUpAjoutModificationGestionDlc;
  let fixture: ComponentFixture<PopUpAjoutModificationGestionDlc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpAjoutModificationGestionDlc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpAjoutModificationGestionDlc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
