import { Component, Input, OnInit } from '@angular/core';
import { ValidatorFn } from '@angular/forms';
import { FormFieldDirective } from '../form-field.directive';

@Component({
  selector: 'app-date-field',
  templateUrl: './date-field.component.html',
  styleUrls: ['./date-field.component.scss']
})
export class DateFieldComponent extends FormFieldDirective implements OnInit {
  private _value: string;

  get value(): string {
    return this._value;
  }

  @Input()
  set value(value: string) {
    this._value = value;

    if (value) {
      this.fieldControl.setValue(value);
    }
  }

  protected OnConstruct(): { controlName: string, validators?: ValidatorFn[] } {
    return { controlName: 'dateField' };
  }

  public ngOnInit(): void {
    super.ngOnInit();
  }
}
