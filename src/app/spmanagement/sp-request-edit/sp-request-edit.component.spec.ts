import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpRequestEditComponent } from './sp-request-edit.component';

describe('SpRequestEditComponent', () => {
  let component: SpRequestEditComponent;
  let fixture: ComponentFixture<SpRequestEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpRequestEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpRequestEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
