import { Component, Input, OnInit } from '@angular/core';
import { BirthNumberModel } from 'src/app/common-services/models/birth-number-model';
import { ValidatorFn } from '@angular/forms';
import { FormFieldDirective } from '../form-field.directive';

@Component({
  selector: 'app-birth-number-field',
  templateUrl: './birth-number-field.component.html',
  styleUrls: ['./birth-number-field.component.scss']
})
export class BirthNumberFieldComponent extends FormFieldDirective implements OnInit {
  private _value: BirthNumberModel;

  get value(): BirthNumberModel {
    return this._value;
  }

  @Input()
  set value(value: BirthNumberModel) {
    this._value = value;

    if (value) {
      this.fieldControl.setValue(value.value);
    }
  }

  protected OnConstruct(): { controlName: string, validators?: ValidatorFn[] } {
    return { controlName: 'birthNumberField' };
  }

  public ngOnInit(): void {
    super.ngOnInit();
  }
}
