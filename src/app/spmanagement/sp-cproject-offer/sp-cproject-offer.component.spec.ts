import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpCprojectOfferComponent } from './sp-cproject-offer.component';

describe('SpCprojectOfferComponent', () => {
  let component: SpCprojectOfferComponent;
  let fixture: ComponentFixture<SpCprojectOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpCprojectOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpCprojectOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
