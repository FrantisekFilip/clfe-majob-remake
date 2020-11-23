import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalStepperHeaderButtonComponent } from './vertical-stepper-header-button.component';

describe('VerticalStepperHeaderButtonComponent', () => {
  let component: VerticalStepperHeaderButtonComponent;
  let fixture: ComponentFixture<VerticalStepperHeaderButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalStepperHeaderButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalStepperHeaderButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
