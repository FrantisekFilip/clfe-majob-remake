import { Directive, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { BaseModel } from 'src/app/common-services/models/base-model';
import { BasicControlDirective } from '../basic-control.directive';

@Directive()
export abstract class FormFieldDirective extends BasicControlDirective implements OnInit {
  private _controlName: string;

  public get controlName(): string {
    return this._controlName;
  }

  @Input()
  public placeholder: string;

  @Input()
  public parentForm: FormGroup;

  public readonly fieldControl: FormControl;

  constructor() {
    super();
    this.fieldControl = new FormControl('', this.defaultValidators);
  }

  protected OnConstruct(): { controlName: string, validators?: ValidatorFn[] } {
    return { controlName: '' };
  }

  public ngOnInit(): void {
    const metadata = this.OnConstruct();
    this._controlName = metadata.controlName;

    if (metadata.validators) {
      metadata.validators.forEach(validator => {
        this.defaultValidators.push(validator);
      });

      this.fieldControl.setValidators(this.defaultValidators);
    }

    this.parentForm.addControl(this.controlName, this.fieldControl);
  }

  protected setValidators(explicitValidators?: ValidatorFn[]): ValidatorFn[] {
    const validators = super.setValidators(explicitValidators);
    this.fieldControl.setValidators(validators);
    return validators;
  }

  protected validator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const model = control.value as BaseModel; // TODO - rewrite as helper cast function

      if (model) {
        return model.isValid ? null : model.getFirstError(); // TODO - return all errors?
      }
      else {
        return null;
      }
    };
  }
}
