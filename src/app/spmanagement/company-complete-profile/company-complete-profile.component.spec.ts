import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCompleteProfileComponent } from './company-complete-profile.component';

describe('CompanyCompleteProfileComponent', () => {
  let component: CompanyCompleteProfileComponent;
  let fixture: ComponentFixture<CompanyCompleteProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyCompleteProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCompleteProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
