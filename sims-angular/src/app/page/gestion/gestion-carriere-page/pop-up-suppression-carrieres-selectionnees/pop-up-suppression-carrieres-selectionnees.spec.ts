import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpSuppressionCarrieresSelectionnees } from './pop-up-suppression-carrieres-selectionnees';

describe('PopUpSuppressionCarrieresSelectionnees', () => {
  let component: PopUpSuppressionCarrieresSelectionnees;
  let fixture: ComponentFixture<PopUpSuppressionCarrieresSelectionnees>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpSuppressionCarrieresSelectionnees]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpSuppressionCarrieresSelectionnees);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
