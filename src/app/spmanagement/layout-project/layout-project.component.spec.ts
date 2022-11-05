import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutProjectComponent } from './layout-project.component';

describe('LayoutProjectComponent', () => {
  let component: LayoutProjectComponent;
  let fixture: ComponentFixture<LayoutProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
