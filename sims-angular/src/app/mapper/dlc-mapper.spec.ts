import { TestBed } from '@angular/core/testing';

import { DlcMapper } from './dlc-mapper';

describe('DlcMapper', () => {
  let service: DlcMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DlcMapper);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
