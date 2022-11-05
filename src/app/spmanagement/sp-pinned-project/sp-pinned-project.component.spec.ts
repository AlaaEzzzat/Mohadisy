import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpPinnedProjectComponent } from './sp-pinned-project.component';

describe('SpPinnedProjectComponent', () => {
  let component: SpPinnedProjectComponent;
  let fixture: ComponentFixture<SpPinnedProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpPinnedProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpPinnedProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
