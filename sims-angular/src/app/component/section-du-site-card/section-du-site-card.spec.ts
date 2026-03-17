import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDuSiteCard } from './section-du-site-card';

describe('SectionDuSiteCard', () => {
  let component: SectionDuSiteCard;
  let fixture: ComponentFixture<SectionDuSiteCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionDuSiteCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionDuSiteCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
