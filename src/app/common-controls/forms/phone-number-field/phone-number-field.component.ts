import { Component, Input, OnInit } from '@angular/core';
import { ValidatorFn } from '@angular/forms';
import { PhoneNumberModel } from 'src/app/common-services/models/phone-number-model';
import { FormFieldDirective } from '../form-field.directive';

@Component({
  selector: 'app-phone-number-field',
  templateUrl: './phone-number-field.component.html',
  styleUrls: ['./phone-number-field.component.scss']
})
export class PhoneNumberFieldComponent extends FormFieldDirective implements OnInit {
  private _value: PhoneNumberModel;

  get value(): PhoneNumberModel {
    return this._value;
  }

  @Input()
  set value(value: PhoneNumberModel) {
    this._value = value;

    if (value) {
      this.fieldControl.setValue(value.value);
    }
  }

  protected OnConstruct(): { controlName: string, validators?: ValidatorFn[] } {
    return { controlName: 'phoneNumberField' };
  }

  public ngOnInit(): void {
    super.ngOnInit();
  }
}
