import { Directive, Input } from '@angular/core';
import { ButtonDirective } from './button.directive';

@Directive()
export abstract class RefButtonDirective extends ButtonDirective {

  @Input()
  public targetUrl: string;

  download(): void {
    window.open(this.targetUrl, '_blank');
  }
}
