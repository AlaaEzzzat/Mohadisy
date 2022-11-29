import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSettingProfileComponent } from './admin-setting-profile.component';

describe('AdminSettingProfileComponent', () => {
  let component: AdminSettingProfileComponent;
  let fixture: ComponentFixture<AdminSettingProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSettingProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSettingProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
