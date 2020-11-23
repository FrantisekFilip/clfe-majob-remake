import { TestBed } from '@angular/core/testing';

import { EnumerationsService } from './enumerations.service';

describe('EnumerationsService', () => {
  let service: EnumerationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnumerationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
