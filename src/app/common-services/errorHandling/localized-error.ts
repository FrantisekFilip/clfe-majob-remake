import { AppError } from './app-error';

export class LocalizedError extends Error implements AppError {
    public readonly params: string[];

    public get code(): string {
        return this.name;
    }

    constructor(code: string, params?: string[]) {
        super();
        this.name = code ? code : 'UNKNOWN_ERROR';
        this.params = params;
    }

    public getMessage(): string {
        return this.code; // TODO with localization
    }
}
