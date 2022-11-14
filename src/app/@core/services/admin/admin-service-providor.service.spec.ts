import { TestBed } from '@angular/core/testing';

import { AdminServiceProvidorService } from './admin-service-providor.service';

describe('AdminServiceProvidorService', () => {
  let service: AdminServiceProvidorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminServiceProvidorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
