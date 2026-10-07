import { TestBed } from '@angular/core/testing';

import { GestionTraitPageService } from './gestion-trait-page-service';

describe('GestionTraitPageService', () => {
  let service: GestionTraitPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionTraitPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
