import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPaymentsSpComponent } from './admin-payments-sp.component';

describe('AdminPaymentsSpComponent', () => {
  let component: AdminPaymentsSpComponent;
  let fixture: ComponentFixture<AdminPaymentsSpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPaymentsSpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPaymentsSpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
