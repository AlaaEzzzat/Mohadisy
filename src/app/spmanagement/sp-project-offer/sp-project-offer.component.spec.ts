import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpProjectOfferComponent } from './sp-project-offer.component';

describe('SpProjectOfferComponent', () => {
  let component: SpProjectOfferComponent;
  let fixture: ComponentFixture<SpProjectOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpProjectOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpProjectOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
