import { TestBed } from '@angular/core/testing';

import { SaveCandidateGuard } from './save-candidate.guard';

describe('SaveCandidateGuard', () => {
  let guard: SaveCandidateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SaveCandidateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
