import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpPriceOffersComponent } from './sp-price-offers.component';

describe('SpPriceOffersComponent', () => {
  let component: SpPriceOffersComponent;
  let fixture: ComponentFixture<SpPriceOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpPriceOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpPriceOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
