import { LocalizedError } from './localized-error';

export class IncompatibleCurrencyError extends LocalizedError {
    constructor(currency1: string, currency2: string) {
        super('INCOMPATIBLE_CURRENCY_ERROR', [currency1, currency2]);
    }
}
