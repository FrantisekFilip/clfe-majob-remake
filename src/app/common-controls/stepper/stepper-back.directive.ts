import { CdkStepperNext } from '@angular/cdk/stepper';
import { Directive } from '@angular/core';

@Directive({
  selector: 'app-back-button[appStepperBack]'
})
export class StepperBackDirective extends CdkStepperNext {
}
