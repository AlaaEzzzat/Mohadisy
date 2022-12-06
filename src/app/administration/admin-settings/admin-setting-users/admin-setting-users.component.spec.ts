import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSettingUsersComponent } from './admin-setting-users.component';

describe('AdminSettingUsersComponent', () => {
  let component: AdminSettingUsersComponent;
  let fixture: ComponentFixture<AdminSettingUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSettingUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSettingUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
