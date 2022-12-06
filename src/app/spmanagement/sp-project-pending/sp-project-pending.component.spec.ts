import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpProjectPendingComponent } from './sp-project-pending.component';

describe('SpProjectPendingComponent', () => {
  let component: SpProjectPendingComponent;
  let fixture: ComponentFixture<SpProjectPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpProjectPendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpProjectPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
