import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrokedIconButtonComponent } from './stroked-icon-button.component';

describe('StrokedIconButtonComponent', () => {
  let component: StrokedIconButtonComponent;
  let fixture: ComponentFixture<StrokedIconButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrokedIconButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrokedIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
