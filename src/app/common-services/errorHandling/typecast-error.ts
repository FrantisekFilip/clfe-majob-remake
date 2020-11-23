import { LocalizedError } from './localized-error';

export class TypecastError extends LocalizedError {
    constructor(type: string) { // TODO - accept type object
        super('INVALID_TYPECAST_ERROR', [type]);
    }
}
