import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionTraitPage } from './gestion-trait-page';

describe('GestionTraitPage', () => {
  let component: GestionTraitPage;
  let fixture: ComponentFixture<GestionTraitPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionTraitPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionTraitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
