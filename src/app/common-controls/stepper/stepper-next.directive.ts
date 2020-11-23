import { CdkStepperNext } from '@angular/cdk/stepper';
import { Directive } from '@angular/core';

@Directive({
  selector: 'app-next-button[appStepperNext]'
})
export class StepperNextDirective extends CdkStepperNext {
}
