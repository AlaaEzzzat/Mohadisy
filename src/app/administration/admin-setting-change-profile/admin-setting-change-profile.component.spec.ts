import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSettingChangeProfileComponent } from './admin-setting-change-profile.component';

describe('AdminSettingChangeProfileComponent', () => {
  let component: AdminSettingChangeProfileComponent;
  let fixture: ComponentFixture<AdminSettingChangeProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSettingChangeProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSettingChangeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
