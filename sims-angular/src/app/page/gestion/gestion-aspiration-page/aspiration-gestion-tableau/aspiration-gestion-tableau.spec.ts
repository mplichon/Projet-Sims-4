import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AspirationGestionTableau } from './aspiration-gestion-tableau';

describe('AspirationGestionTableau', () => {
  let component: AspirationGestionTableau;
  let fixture: ComponentFixture<AspirationGestionTableau>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AspirationGestionTableau]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AspirationGestionTableau);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
