import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionToolbar } from './gestion-toolbar';

describe('GestionToolbar', () => {
  let component: GestionToolbar;
  let fixture: ComponentFixture<GestionToolbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionToolbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionToolbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
