import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevWorksComponent } from './prev-works.component';

describe('PrevWorksComponent', () => {
  let component: PrevWorksComponent;
  let fixture: ComponentFixture<PrevWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrevWorksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
