import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceOfferProjectMainLayoutComponent } from './price-offer-project-main-layout.component';

describe('PriceOfferProjectMainLayoutComponent', () => {
  let component: PriceOfferProjectMainLayoutComponent;
  let fixture: ComponentFixture<PriceOfferProjectMainLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceOfferProjectMainLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceOfferProjectMainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
