import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpMainProfileComponent } from './sp-main-profile.component';

describe('SpMainProfileComponent', () => {
  let component: SpMainProfileComponent;
  let fixture: ComponentFixture<SpMainProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpMainProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpMainProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
