import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteTextComponent } from './infinite-text.component';

describe('InfiniteTextComponent', () => {
  let component: InfiniteTextComponent;
  let fixture: ComponentFixture<InfiniteTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfiniteTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfiniteTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
