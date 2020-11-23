import { validateBasis } from '@angular/flex-layout';
import { LocalizedMessage } from '../services/localized-message';

export interface ValidatableModel {
    doApply: boolean;

    readonly isValid: boolean;

    readonly validationErrors: LocalizedMessage[];

    validate(): ValidatableModel; // return self to allow chaining

    getFirstError(): LocalizedMessage;
}
