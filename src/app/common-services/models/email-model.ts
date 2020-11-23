import { BaseModel } from './base-model';
import { ValidatableModel } from './validatable-model';

export class EmailModel extends BaseModel {
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
            if (!this.value.includes('@')) {
                this.createAndAddErrorMessage('INVALID_EMAIL_FORMAT');
            }
        }

        return this;
    }
}
