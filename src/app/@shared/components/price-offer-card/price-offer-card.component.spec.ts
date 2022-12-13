import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceOfferCardComponent } from './price-offer-card.component';

describe('PriceOfferCardComponent', () => {
  let component: PriceOfferCardComponent;
  let fixture: ComponentFixture<PriceOfferCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceOfferCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceOfferCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
