import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgToAdminComponent } from './msg-to-admin.component';

describe('MsgToAdminComponent', () => {
  let component: MsgToAdminComponent;
  let fixture: ComponentFixture<MsgToAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgToAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgToAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
