import { TestBed } from '@angular/core/testing';

import { SpAuthGuard } from './sp-auth.guard';

describe('SpAuthGuard', () => {
  let guard: SpAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SpAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
