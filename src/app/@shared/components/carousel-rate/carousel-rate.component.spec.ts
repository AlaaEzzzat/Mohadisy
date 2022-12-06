import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselRateComponent } from './carousel-rate.component';

describe('CarouselRateComponent', () => {
  let component: CarouselRateComponent;
  let fixture: ComponentFixture<CarouselRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
