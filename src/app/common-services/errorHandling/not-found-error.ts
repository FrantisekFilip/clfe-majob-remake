import { LocalizedError } from './localized-error';

export class NotFoundError extends LocalizedError {
    constructor(type: string, key: string) { // TODO - accept type object
        super('OBJECT_NOT_FOUND', [type, key]);
    }
}
