import { Component, Input, OnInit } from '@angular/core';
import { ValidatorFn, Validators } from '@angular/forms';
import { FormFieldDirective } from '../form-field.directive';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent extends FormFieldDirective implements OnInit {
  private _minLength: number;
  private _maxLength: number;
  private _value: string;

  public get minLength(): number {
    return this._minLength;
  }

  @Input()
  public set minLength(value: number) {
    this._minLength = value;
    this.addValidators();
  }

  public get maxLength(): number {
    return this._maxLength;
  }

  @Input()
  public set maxLength(value: number) {
    this._maxLength = value;
    this.addValidators();
  }

  public get value(): string {
    return this._value;
  }

  @Input()
  public set value(value: string) {
    this._value = value;

    if (value) {
      this.fieldControl.setValue(value);
    }
  }

  protected OnConstruct(): { controlName: string, validators?: ValidatorFn[] } {
    return { controlName: 'textField' };
  }

  public ngOnInit(): void {
    super.ngOnInit();
  }

  protected addValidators(): ValidatorFn[] {
    const validators: ValidatorFn[] = [];

    if (this._minLength) {
      validators.push(Validators.minLength(this._minLength));
    }

    if (this._maxLength) {
      validators.push(Validators.maxLength(this._maxLength));
    }

    return this.validators = validators;
  }
}
