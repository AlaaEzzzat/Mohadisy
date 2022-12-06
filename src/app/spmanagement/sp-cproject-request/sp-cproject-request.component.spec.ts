import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpCprojectRequestComponent } from './sp-cproject-request.component';

describe('SpCprojectRequestComponent', () => {
  let component: SpCprojectRequestComponent;
  let fixture: ComponentFixture<SpCprojectRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpCprojectRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpCprojectRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
