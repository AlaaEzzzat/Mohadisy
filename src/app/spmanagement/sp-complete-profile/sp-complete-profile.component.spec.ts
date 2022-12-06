import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpCompleteProfileComponent } from './sp-complete-profile.component';

describe('SpCompleteProfileComponent', () => {
  let component: SpCompleteProfileComponent;
  let fixture: ComponentFixture<SpCompleteProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpCompleteProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpCompleteProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
