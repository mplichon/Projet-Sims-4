import { TestBed } from '@angular/core/testing';

import { GestionCarrierePageService } from './gestion-carriere-page-service';

describe('GestionCarrierePageService', () => {
  let service: GestionCarrierePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionCarrierePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
