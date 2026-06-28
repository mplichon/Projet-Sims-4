import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpSuppressionDlc } from './pop-up-suppression-dlc';

describe('PopUpSuppressionDlc', () => {
  let component: PopUpSuppressionDlc;
  let fixture: ComponentFixture<PopUpSuppressionDlc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpSuppressionDlc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpSuppressionDlc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
