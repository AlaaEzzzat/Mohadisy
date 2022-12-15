import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpAllProjectsComponent } from './sp-all-projects.component';

describe('SpAllProjectsComponent', () => {
  let component: SpAllProjectsComponent;
  let fixture: ComponentFixture<SpAllProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpAllProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpAllProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
