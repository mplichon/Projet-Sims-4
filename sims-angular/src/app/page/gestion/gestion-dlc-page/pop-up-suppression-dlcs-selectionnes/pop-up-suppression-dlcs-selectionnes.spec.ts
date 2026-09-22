import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpSuppressionDlcsSelectionnes } from './pop-up-suppression-dlcs-selectionnes';

describe('PopUpSuppressionDlcsSelectionnes', () => {
  let component: PopUpSuppressionDlcsSelectionnes;
  let fixture: ComponentFixture<PopUpSuppressionDlcsSelectionnes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpSuppressionDlcsSelectionnes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpSuppressionDlcsSelectionnes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
