import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';
import { LabelPosition } from './label-position';

@Directive()
export abstract class BasicControlDirective {
  private _defaultValidators: ValidatorFn[];
  private _validators: ValidatorFn[];
  private _labelPosition: LabelPosition = LabelPosition.Before;
  private _required: boolean;
  private _readOnly: boolean;
  private _disabled: boolean;

  get labelPosition(): LabelPosition {
    return this._labelPosition;
  }

  @Input()
  set labelPosition(value: LabelPosition) {
    this._labelPosition = value ?? LabelPosition.Before;
  }

  public get required(): boolean {
    return this._required;
  }

  @Input()
  public set required(value: boolean) {
    this._required = value;
    this.setValidators();
  }

  public get readOnly(): boolean {
    return this._readOnly;
  }

  @Input()
  public set readOnly(value: boolean) {
    this._readOnly = value;
    this.setValidators();
  }

  public get disabled(): boolean {
    return this._disabled;
  }

  @Input()
  public set disabled(value: boolean) {
    this._disabled = value;
    this.setValidators();
  }

  public get defaultValidators(): ValidatorFn[] {
    return this._defaultValidators;
  }

  public get validators(): ValidatorFn[] {
    return this._validators;
  }

  @Input()
  public set validators(value: ValidatorFn[]) {
    this._validators = this.setValidators(value);
  }

  constructor() {
    this._defaultValidators = [this.validator];
  }

  protected setValidators(explicitValidators?: ValidatorFn[]): ValidatorFn[] {
    let validators: ValidatorFn[];

    if (this.readOnly && !this.disabled) {
      validators = [...this._defaultValidators];

      if (this._required) {
        validators.push(Validators.required);
      }

      if (explicitValidators && explicitValidators.length > 0) {
        validators = validators.concat(explicitValidators);
      }
    }
    else {
      validators = [];
    }

    return validators;
  }

  protected validator(): ValidatorFn {
    return (_control: AbstractControl): { [key: string]: any } | null => {
      return null;
    };
  }
}
