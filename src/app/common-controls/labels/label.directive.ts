import { Directive } from '@angular/core';

@Directive()
export abstract class LabelDirective {

  public abstract get formatted(): string;

  constructor() { }
}
