import { LocalizedError } from './localized-error';

export class UndefinedParameterError extends LocalizedError {
    constructor(parameterName: string) {
        super('UNDEFINED_PARAMETER_ERROR', [parameterName]);
    }
}
