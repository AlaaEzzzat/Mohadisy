import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpProjectCurrentComponent } from './sp-project-current.component';

describe('SpProjectCurrentComponent', () => {
  let component: SpProjectCurrentComponent;
  let fixture: ComponentFixture<SpProjectCurrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpProjectCurrentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpProjectCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
