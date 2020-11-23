import { Component, Input } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';

@Component({
  selector: 'app-vertical-stepper',
  templateUrl: './vertical-stepper.component.html',
  styleUrls: ['./vertical-stepper.component.scss'],
  providers: [{ provide: CdkStepper, useExisting: VerticalStepperComponent }]
})
export class VerticalStepperComponent extends CdkStepper {
  @Input()
  public headerDescription: string;

  onClick(index: number): void {
    this.selectedIndex = index;
  }

  isActive(index: number): boolean {
    return this.selectedIndex === index;
  }
}
