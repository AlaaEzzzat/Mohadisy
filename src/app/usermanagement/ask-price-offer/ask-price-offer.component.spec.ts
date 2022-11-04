import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskPriceOfferComponent } from './ask-price-offer.component';

describe('AskPriceOfferComponent', () => {
  let component: AskPriceOfferComponent;
  let fixture: ComponentFixture<AskPriceOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskPriceOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AskPriceOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
