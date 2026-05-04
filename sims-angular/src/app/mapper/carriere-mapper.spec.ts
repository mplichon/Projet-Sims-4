import { TestBed } from '@angular/core/testing';

import { CarriereMapper } from './carriere-mapper';

describe('CarriereMapper', () => {
  let service: CarriereMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarriereMapper);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
