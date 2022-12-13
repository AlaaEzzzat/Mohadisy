import { TestBed } from '@angular/core/testing';

import { SpPriceOfferService } from './sp-price-offer.service';

describe('SpPriceOfferService', () => {
  let service: SpPriceOfferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpPriceOfferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
