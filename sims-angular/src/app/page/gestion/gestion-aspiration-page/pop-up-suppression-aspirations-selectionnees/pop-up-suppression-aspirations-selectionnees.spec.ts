import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpSuppressionAspirationsSelectionnees } from './pop-up-suppression-aspirations-selectionnees';

describe('PopUpSuppressionAspirationsSelectionnees', () => {
  let component: PopUpSuppressionAspirationsSelectionnees;
  let fixture: ComponentFixture<PopUpSuppressionAspirationsSelectionnees>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpSuppressionAspirationsSelectionnees]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpSuppressionAspirationsSelectionnees);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
