import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitreSection } from './titre-section';

describe('TitreSection', () => {
  let component: TitreSection;
  let fixture: ComponentFixture<TitreSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitreSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitreSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
