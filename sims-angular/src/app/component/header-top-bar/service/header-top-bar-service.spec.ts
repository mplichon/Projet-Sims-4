import { TestBed } from '@angular/core/testing';

import { HeaderTopBarService } from './header-top-bar-service';

describe('HeaderTopBarService', () => {
  let service: HeaderTopBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderTopBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
