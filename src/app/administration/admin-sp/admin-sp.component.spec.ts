import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSPComponent } from './admin-sp.component';

describe('AdminSPComponent', () => {
  let component: AdminSPComponent;
  let fixture: ComponentFixture<AdminSPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
