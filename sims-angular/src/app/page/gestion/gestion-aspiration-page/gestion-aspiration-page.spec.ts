import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAspirationPage } from './gestion-aspiration-page';

describe('GestionAspirationPage', () => {
  let component: GestionAspirationPage;
  let fixture: ComponentFixture<GestionAspirationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionAspirationPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionAspirationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
