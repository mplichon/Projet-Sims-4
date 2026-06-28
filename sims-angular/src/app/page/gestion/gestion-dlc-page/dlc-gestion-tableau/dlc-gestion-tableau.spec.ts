import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlcGestionTableau } from './dlc-gestion-tableau';

describe('DlcGestionTableau', () => {
  let component: DlcGestionTableau;
  let fixture: ComponentFixture<DlcGestionTableau>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DlcGestionTableau]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DlcGestionTableau);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
