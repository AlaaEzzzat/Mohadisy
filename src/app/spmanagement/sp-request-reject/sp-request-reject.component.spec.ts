import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpRequestRejectComponent } from './sp-request-reject.component';

describe('SpRequestRejectComponent', () => {
  let component: SpRequestRejectComponent;
  let fixture: ComponentFixture<SpRequestRejectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpRequestRejectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpRequestRejectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
