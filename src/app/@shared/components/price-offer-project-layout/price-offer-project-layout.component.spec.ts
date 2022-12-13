import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceOfferProjectLayoutComponent } from './price-offer-project-layout.component';

describe('PriceOfferProjectLayoutComponent', () => {
  let component: PriceOfferProjectLayoutComponent;
  let fixture: ComponentFixture<PriceOfferProjectLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceOfferProjectLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceOfferProjectLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
