import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPaymentsClientsComponent } from './admin-payments-clients.component';

describe('AdminPaymentsClientsComponent', () => {
  let component: AdminPaymentsClientsComponent;
  let fixture: ComponentFixture<AdminPaymentsClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPaymentsClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPaymentsClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
