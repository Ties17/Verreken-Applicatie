import { TestBed } from '@angular/core/testing';

import { VerrekenService } from './verreken.service';

describe('VerrekenService', () => {
  let service: VerrekenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerrekenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
