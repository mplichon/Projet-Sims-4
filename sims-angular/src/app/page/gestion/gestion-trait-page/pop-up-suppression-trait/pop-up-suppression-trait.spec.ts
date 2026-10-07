import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpSuppressionTrait } from './pop-up-suppression-trait';

describe('PopUpSuppressionTrait', () => {
  let component: PopUpSuppressionTrait;
  let fixture: ComponentFixture<PopUpSuppressionTrait>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpSuppressionTrait]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpSuppressionTrait);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
