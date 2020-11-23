import { Component, Input, OnInit } from '@angular/core';
import { ValidatorFn } from '@angular/forms';
import { EmailModel } from 'src/app/common-services/models/email-model';
import { FormFieldDirective } from '../form-field.directive';

@Component({
  selector: 'app-email-field',
  templateUrl: './email-field.component.html',
  styleUrls: ['./email-field.component.scss']
})
export class EmailFieldComponent extends FormFieldDirective implements OnInit {
  private _value: EmailModel;

  get value(): EmailModel {
    return this._value;
  }

  @Input()
  set value(value: EmailModel) {
    this._value = value;

    if (value) {
      this.fieldControl.setValue(value.value);
    }
  }

  protected OnConstruct(): { controlName: string, validators?: ValidatorFn[] } {
    return { controlName: 'emailField' };
  }

  public ngOnInit(): void {
    super.ngOnInit();
  }
}
