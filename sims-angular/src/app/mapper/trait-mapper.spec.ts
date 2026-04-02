import { TestBed } from '@angular/core/testing';

import { TraitMapper } from './trait-mapper';

describe('TraitMapper', () => {
  let service: TraitMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraitMapper);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
