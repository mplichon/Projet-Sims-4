import { TestBed } from '@angular/core/testing';

import { GestionDlcPageService } from './gestion-dlc-page-service';

describe('GestionDlcPageService', () => {
  let service: GestionDlcPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionDlcPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
