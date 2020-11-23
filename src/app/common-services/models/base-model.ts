import { LocalizedMessage } from '../services/localized-message';
import { UserMessage } from '../services/user-message';
import { ValidatableModel } from './validatable-model';

export abstract class BaseModel implements ValidatableModel {
    private _validationErrors: LocalizedMessage[];

    public doApply = true;

    public get validationErrors(): LocalizedMessage[] {
        return this._validationErrors;
    }

    public get isValid(): boolean {
        if (!this._validationErrors) {
            this.validate();
        }

        return this._validationErrors.length === 0;
    }

    public static createErrorMessage(code: string, params?: string[]): LocalizedMessage {
        return new UserMessage(code, params);
    }

    protected invalidate(): void {
        this._validationErrors = null;
    }

    protected createAndAddErrorMessage(code: string, params?: string[]): LocalizedMessage {
        const message: LocalizedMessage = BaseModel.createErrorMessage(code, params);
        this.addValidationError(message);
        return message;
    }

    protected addValidationError(errorMessage: LocalizedMessage): void {
        if (errorMessage) {
            this._validationErrors.push(errorMessage);
        }
    }

    protected addValidationErrors(errorMessages: LocalizedMessage[]): void {
        if (errorMessages && errorMessages.length > 0) {
            this._validationErrors = this._validationErrors.concat(errorMessages);
        }
    }

    protected addValidationModelErrors(model: ValidatableModel): void {
        const errors = model.validationErrors;

        if (errors && errors.length > 0) {
            this._validationErrors = this._validationErrors.concat(errors);
        }
    }

    protected validateProperties(): void {
    }

    public validate(): ValidatableModel {
        this._validationErrors = [];
        this.validateProperties();
        return this;
    }

    public getFirstError(): LocalizedMessage {
        if (this._validationErrors && this.validationErrors.length > 0) {
            return this._validationErrors[0];
        }

        return null;
    }
}
