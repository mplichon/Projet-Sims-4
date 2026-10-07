import { TestBed } from '@angular/core/testing';

import { GestionCompetencePageService } from './gestion-competence-page-service';

describe('GestionCompetencePageService', () => {
  let service: GestionCompetencePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionCompetencePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
