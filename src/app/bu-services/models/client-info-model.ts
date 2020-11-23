import { BaseModel } from 'src/app/common-services/models/base-model';
import { BirthNumberModel } from 'src/app/common-services/models/birth-number-model';
import { EmailModel } from 'src/app/common-services/models/email-model';
import { PhoneNumberModel } from 'src/app/common-services/models/phone-number-model';
import { ValidatableModel } from 'src/app/common-services/models/validatable-model';
import { LocalizedMessage } from 'src/app/common-services/services/localized-message';

export class ClientInfoModel extends BaseModel {
    private _birthNumber: BirthNumberModel;
    private _birthDate: Date;
    private _phoneNumber: PhoneNumberModel;
    private _email: EmailModel;

    public firstName: string;

    public lastName: string;

    public get name(): string {
        const parts: string[] = [];

        if (this.firstName) {
            parts.push(this.firstName);
        }

        if (this.lastName) {
            parts.push(this.lastName);
        }

        return parts.join(' ');
    }

    public titleAN: string;

    public titleBN: string;

    public get birthNumber(): BirthNumberModel {
        return this._birthNumber;
    }

    public set birthNumber(value: BirthNumberModel) {
        this.invalidate();
        this._birthNumber = value;
    }

    public get birthDate(): Date {
        return this._birthDate;
    }

    public set birthDate(value: Date) {
        this.invalidate();
        this._birthDate = value;
    }

    public get phoneNumber(): PhoneNumberModel {
        return this._phoneNumber;
    }

    public set phoneNumber(value: PhoneNumberModel) {
        this.invalidate();
        this._phoneNumber = value;
    }

    public get email(): EmailModel {
        return this._email;
    }

    public set email(value: EmailModel) {
        this.invalidate();
        this._email = value;
    }

    private static validateBirthDate(value: Date): LocalizedMessage {
        if (value) {
            const currentDate = new Date();

            if (value > currentDate) {
                return BaseModel.createErrorMessage('BIRTH_DATE_MUST_BE_IN_THE_PAST');
            }
        }

        return null;
    }

    public validate(): ValidatableModel {
        const errors: string[] = [];
        this.addValidationModelErrors(this.birthNumber.validate());
        this.addValidationError(ClientInfoModel.validateBirthDate(this._birthDate));
        this.addValidationModelErrors(this.phoneNumber.validate());
        this.addValidationModelErrors(this.email.validate());
        return this;
    }
}
