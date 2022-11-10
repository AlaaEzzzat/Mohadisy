import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpProjectNegotiationComponent } from './sp-project-negotiation.component';

describe('SpProjectNegotiationComponent', () => {
  let component: SpProjectNegotiationComponent;
  let fixture: ComponentFixture<SpProjectNegotiationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpProjectNegotiationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpProjectNegotiationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
