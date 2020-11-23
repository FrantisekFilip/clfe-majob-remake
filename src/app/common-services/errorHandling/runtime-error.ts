import { LocalizedError } from './localized-error';

export class RuntimeError extends LocalizedError {
    constructor(message: string) {
        super('RUNTIME_ERROR', [message]);
    }
}
