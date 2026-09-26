import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpSuppressionCompetence } from './pop-up-suppression-competence';

describe('PopUpSuppressionCompetence', () => {
  let component: PopUpSuppressionCompetence;
  let fixture: ComponentFixture<PopUpSuppressionCompetence>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpSuppressionCompetence]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpSuppressionCompetence);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
