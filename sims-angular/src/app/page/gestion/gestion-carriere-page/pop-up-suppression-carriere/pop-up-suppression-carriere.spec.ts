import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpSuppressionCarriere } from './pop-up-suppression-carriere';

describe('PopUpSuppressionCarriere', () => {
  let component: PopUpSuppressionCarriere;
  let fixture: ComponentFixture<PopUpSuppressionCarriere>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpSuppressionCarriere]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpSuppressionCarriere);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
