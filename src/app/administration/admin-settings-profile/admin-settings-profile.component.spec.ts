import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSettingsProfileComponent } from './admin-settings-profile.component';

describe('AdminSettingsProfileComponent', () => {
  let component: AdminSettingsProfileComponent;
  let fixture: ComponentFixture<AdminSettingsProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSettingsProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSettingsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
