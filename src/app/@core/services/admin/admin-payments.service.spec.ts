import { TestBed } from '@angular/core/testing';

import { AdminPaymentsService } from './admin-payments.service';

describe('AdminPaymentsService', () => {
  let service: AdminPaymentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminPaymentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
