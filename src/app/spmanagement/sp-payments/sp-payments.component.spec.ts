import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpPaymentsComponent } from './sp-payments.component';

describe('SpPaymentsComponent', () => {
  let component: SpPaymentsComponent;
  let fixture: ComponentFixture<SpPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpPaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
