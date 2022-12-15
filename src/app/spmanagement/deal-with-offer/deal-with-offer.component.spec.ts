import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealWithOfferComponent } from './deal-with-offer.component';

describe('DealWithOfferComponent', () => {
  let component: DealWithOfferComponent;
  let fixture: ComponentFixture<DealWithOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealWithOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealWithOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
