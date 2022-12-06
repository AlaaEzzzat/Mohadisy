import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpCprojectAcceptComponent } from './sp-cproject-accept.component';

describe('SpCprojectAcceptComponent', () => {
  let component: SpCprojectAcceptComponent;
  let fixture: ComponentFixture<SpCprojectAcceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpCprojectAcceptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpCprojectAcceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
