import { TestBed } from '@angular/core/testing';

import { LoanPostService } from './loan-post.service';

describe('LoanPostService', () => {
  let service: LoanPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
