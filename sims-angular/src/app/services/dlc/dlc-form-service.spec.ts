import { TestBed } from '@angular/core/testing';

import { DlcFormService } from './dlc-form-service';

describe('DlcFormService', () => {
  let service: DlcFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DlcFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
