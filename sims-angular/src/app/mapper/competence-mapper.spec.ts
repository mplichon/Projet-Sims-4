import { TestBed } from '@angular/core/testing';

import { CompetenceMapper } from './competence-mapper';

describe('CompetenceMapper', () => {
  let service: CompetenceMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompetenceMapper);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
