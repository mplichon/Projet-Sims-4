import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlcFormDialog } from './dlc-form-dialog';

describe('DlcFormDialog', () => {
  let component: DlcFormDialog;
  let fixture: ComponentFixture<DlcFormDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DlcFormDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DlcFormDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
