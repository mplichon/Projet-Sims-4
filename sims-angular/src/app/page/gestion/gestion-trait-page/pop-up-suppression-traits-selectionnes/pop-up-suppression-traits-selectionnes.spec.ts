import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpSuppressionTraitsSelectionnes } from './pop-up-suppression-traits-selectionnes';

describe('PopUpSuppressionTraitsSelectionnes', () => {
  let component: PopUpSuppressionTraitsSelectionnes;
  let fixture: ComponentFixture<PopUpSuppressionTraitsSelectionnes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpSuppressionTraitsSelectionnes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpSuppressionTraitsSelectionnes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
