import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaisedIconButtonComponent } from './raised-icon-button.component';

describe('RaisedIconButtonComponent', () => {
  let component: RaisedIconButtonComponent;
  let fixture: ComponentFixture<RaisedIconButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaisedIconButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaisedIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
