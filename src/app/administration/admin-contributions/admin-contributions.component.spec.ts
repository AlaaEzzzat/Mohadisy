import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContributionsComponent } from './admin-contributions.component';

describe('AdminContributionsComponent', () => {
  let component: AdminContributionsComponent;
  let fixture: ComponentFixture<AdminContributionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminContributionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminContributionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
