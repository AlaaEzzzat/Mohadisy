import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSpUpdataComponent } from './admin-sp-updata.component';

describe('AdminSpUpdataComponent', () => {
  let component: AdminSpUpdataComponent;
  let fixture: ComponentFixture<AdminSpUpdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSpUpdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSpUpdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
