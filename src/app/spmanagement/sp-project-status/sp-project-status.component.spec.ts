import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpProjectStatusComponent } from './sp-project-status.component';

describe('SpProjectStatusComponent', () => {
  let component: SpProjectStatusComponent;
  let fixture: ComponentFixture<SpProjectStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpProjectStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpProjectStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
