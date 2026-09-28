import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpSuppressionAspiration } from './pop-up-suppression-aspiration';

describe('PopUpSuppressionAspiration', () => {
  let component: PopUpSuppressionAspiration;
  let fixture: ComponentFixture<PopUpSuppressionAspiration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpSuppressionAspiration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpSuppressionAspiration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
