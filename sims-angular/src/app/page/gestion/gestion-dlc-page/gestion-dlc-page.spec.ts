import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDlcPage } from './gestion-dlc-page';

describe('GestionDlcPage', () => {
  let component: GestionDlcPage;
  let fixture: ComponentFixture<GestionDlcPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionDlcPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionDlcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
