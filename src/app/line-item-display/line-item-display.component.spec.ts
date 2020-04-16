import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineItemDisplayComponent } from './line-item-display.component';

describe('LineItemDisplayComponent', () => {
  let component: LineItemDisplayComponent;
  let fixture: ComponentFixture<LineItemDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineItemDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineItemDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
