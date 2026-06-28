import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlcGestionToolbar } from './dlc-gestion-toolbar';

describe('DlcGestionToolbar', () => {
  let component: DlcGestionToolbar;
  let fixture: ComponentFixture<DlcGestionToolbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DlcGestionToolbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DlcGestionToolbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
