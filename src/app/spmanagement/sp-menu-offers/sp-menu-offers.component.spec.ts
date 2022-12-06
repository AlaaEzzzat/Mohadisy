import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpMenuOffersComponent } from './sp-menu-offers.component';

describe('SpMenuOffersComponent', () => {
  let component: SpMenuOffersComponent;
  let fixture: ComponentFixture<SpMenuOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpMenuOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpMenuOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
