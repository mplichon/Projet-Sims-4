import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTopBar } from './header-top-bar';

describe('HeaderTopBar', () => {
  let component: HeaderTopBar;
  let fixture: ComponentFixture<HeaderTopBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderTopBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderTopBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
