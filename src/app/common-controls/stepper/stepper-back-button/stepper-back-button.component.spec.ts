import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperBackButtonComponent } from './stepper-back-button.component';

describe('StepperBackButtonComponent', () => {
  let component: StepperBackButtonComponent;
  let fixture: ComponentFixture<StepperBackButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperBackButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperBackButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
