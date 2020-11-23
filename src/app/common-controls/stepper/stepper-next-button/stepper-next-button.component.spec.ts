import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperNextButtonComponent } from './stepper-next-button.component';

describe('StepperNextButtonComponent', () => {
  let component: StepperNextButtonComponent;
  let fixture: ComponentFixture<StepperNextButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StepperNextButtonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperNextButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
