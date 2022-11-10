import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpRequestAcceptComponent } from './sp-request-accept.component';

describe('SpRequestAcceptComponent', () => {
  let component: SpRequestAcceptComponent;
  let fixture: ComponentFixture<SpRequestAcceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpRequestAcceptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpRequestAcceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
