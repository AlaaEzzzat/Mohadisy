import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpProjectRequestComponent } from './sp-project-request.component';

describe('SpProjectRequestComponent', () => {
  let component: SpProjectRequestComponent;
  let fixture: ComponentFixture<SpProjectRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpProjectRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpProjectRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
