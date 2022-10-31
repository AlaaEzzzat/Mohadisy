import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilecomplateComponent } from './profilecomplate.component';

describe('ProfilecomplateComponent', () => {
  let component: ProfilecomplateComponent;
  let fixture: ComponentFixture<ProfilecomplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilecomplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilecomplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
