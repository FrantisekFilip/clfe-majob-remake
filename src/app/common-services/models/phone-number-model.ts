import { hasOnlyDigits } from '../utils';
import { BaseModel } from './base-model';
import { ValidatableModel } from './validatable-model';

export class PhoneNumberModel extends BaseModel {
    public static readonly prefix: string = '+420';
    private _value: string;

    public get value(): string {
        return this._value;
    }

    public set value(value: string) {
        this.invalidate();
        this._value = value;
    }

    public validate(): ValidatableModel {
        if (this.value) {
            if (!(this.value.startsWith('+') ? hasOnlyDigits(this.value.substr(1)) : hasOnlyDigits(this.value))) {
                this.createAndAddErrorMessage('INVALID_PHONENUMBER_FORMAT');
            }
        }

        return this;
    }
}
