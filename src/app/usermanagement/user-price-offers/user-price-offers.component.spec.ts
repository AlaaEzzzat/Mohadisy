import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPriceOffersComponent } from './user-price-offers.component';

describe('UserPriceOffersComponent', () => {
  let component: UserPriceOffersComponent;
  let fixture: ComponentFixture<UserPriceOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPriceOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPriceOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
