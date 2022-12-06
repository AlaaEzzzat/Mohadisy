import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpCprojectRejectComponent } from './sp-cproject-reject.component';

describe('SpCprojectRejectComponent', () => {
  let component: SpCprojectRejectComponent;
  let fixture: ComponentFixture<SpCprojectRejectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpCprojectRejectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpCprojectRejectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
