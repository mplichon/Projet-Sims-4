import { TestBed } from '@angular/core/testing';

import { AspirationMapper } from './aspiration-mapper';

describe('AspirationMapper', () => {
  let service: AspirationMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AspirationMapper);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
