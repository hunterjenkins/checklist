import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistWrapperComponent } from './checklist-wrapper.component';

describe('ChecklistWrapperComponent', () => {
  let component: ChecklistWrapperComponent;
  let fixture: ComponentFixture<ChecklistWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
