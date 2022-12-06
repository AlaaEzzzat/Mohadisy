import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpProjectsComponent } from './sp-projects.component';


describe('SpProjectsComponent', () => {
  let component: SpProjectsComponent;
  let fixture: ComponentFixture<SpProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
