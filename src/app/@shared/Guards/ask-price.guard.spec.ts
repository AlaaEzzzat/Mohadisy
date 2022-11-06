import { TestBed } from '@angular/core/testing';

import { AskPriceGuard } from './ask-price.guard';

describe('AskPriceGuard', () => {
  let guard: AskPriceGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AskPriceGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
