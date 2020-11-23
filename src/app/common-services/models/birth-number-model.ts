import { hasOnlyDigits } from '../utils';
import { BaseModel } from './base-model';
import { ValidatableModel } from './validatable-model';

export class BirthNumberModel extends BaseModel {
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
            if (this.value.length !== 10) {
                this.createAndAddErrorMessage('BIRTHNUMBER_INCORRECT_LENGTH', ['10']);
            }

            if (hasOnlyDigits(this.value)) {
                const asNumber = Number(this.value);

                if (asNumber % 11 !== 0) {
                    this.createAndAddErrorMessage('BIRTHNUMBER_ MUST_BE_MODULUS11');
                }
            }
            else {
                this.createAndAddErrorMessage('BIRTHNUMBER_ MUST_BE_NUMERIC');
            }
        }

        return this;
    }
}
