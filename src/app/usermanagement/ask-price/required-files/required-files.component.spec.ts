import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiredFilesComponent } from './required-files.component';

describe('RequiredFilesComponent', () => {
  let component: RequiredFilesComponent;
  let fixture: ComponentFixture<RequiredFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequiredFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequiredFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
