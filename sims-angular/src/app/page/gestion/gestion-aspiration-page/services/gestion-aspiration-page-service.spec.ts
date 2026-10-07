import { TestBed } from '@angular/core/testing';

import { GestionAspirationPageService } from './gestion-aspiration-page-service';

describe('GestionAspirationPageService', () => {
  let service: GestionAspirationPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionAspirationPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
