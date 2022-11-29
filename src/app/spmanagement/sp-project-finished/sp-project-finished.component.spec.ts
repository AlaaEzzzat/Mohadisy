import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpProjectFinishedComponent } from './sp-project-finished.component';

describe('SpProjectFinishedComponent', () => {
  let component: SpProjectFinishedComponent;
  let fixture: ComponentFixture<SpProjectFinishedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpProjectFinishedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpProjectFinishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
