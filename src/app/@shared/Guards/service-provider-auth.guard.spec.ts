import { TestBed } from '@angular/core/testing';

import { ServiceProviderAuthGuard } from './service-provider-auth.guard';

describe('ServiceProviderAuthGuard', () => {
  let guard: ServiceProviderAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ServiceProviderAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
