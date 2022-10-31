import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpricePriceOffersComponent } from './adminprice-price-offers.component';

describe('AdminpricePriceOffersComponent', () => {
  let component: AdminpricePriceOffersComponent;
  let fixture: ComponentFixture<AdminpricePriceOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminpricePriceOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpricePriceOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
