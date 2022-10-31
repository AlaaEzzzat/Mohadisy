import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpDashBoardComponent } from './sp-dash-board.component';

describe('SpDashBoardComponent', () => {
  let component: SpDashBoardComponent;
  let fixture: ComponentFixture<SpDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpDashBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
