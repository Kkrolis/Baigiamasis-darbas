import { TestBed } from '@angular/core/testing';

import { LoanReasonService } from './loan-reason.service';

describe('LoanReasonService', () => {
  let service: LoanReasonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanReasonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
