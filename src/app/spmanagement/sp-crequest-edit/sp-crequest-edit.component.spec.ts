import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpCrequestEditComponent } from './sp-crequest-edit.component';

describe('SpCrequestEditComponent', () => {
  let component: SpCrequestEditComponent;
  let fixture: ComponentFixture<SpCrequestEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpCrequestEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpCrequestEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
