import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpProjectRequestAllComponent } from './sp-project-request-all.component';

describe('SpProjectRequestAllComponent', () => {
  let component: SpProjectRequestAllComponent;
  let fixture: ComponentFixture<SpProjectRequestAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpProjectRequestAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpProjectRequestAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
