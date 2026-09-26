import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpSuppressionCompetencesSelectionnes } from './pop-up-suppression-competences-selectionnes';

describe('PopUpSuppressionCompetencesSelectionnes', () => {
  let component: PopUpSuppressionCompetencesSelectionnes;
  let fixture: ComponentFixture<PopUpSuppressionCompetencesSelectionnes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpSuppressionCompetencesSelectionnes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpSuppressionCompetencesSelectionnes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
