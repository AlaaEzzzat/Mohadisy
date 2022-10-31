import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilderaccountComponent } from './silderaccount.component';

describe('SilderaccountComponent', () => {
  let component: SilderaccountComponent;
  let fixture: ComponentFixture<SilderaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SilderaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SilderaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
