import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpContributionsComponent } from './sp-contributions.component';

describe('SpContributionsComponent', () => {
  let component: SpContributionsComponent;
  let fixture: ComponentFixture<SpContributionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpContributionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpContributionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
