import { LocalizedMessage } from '../services/localized-message';

export interface AppError extends LocalizedMessage{
    getMessage(): string;
}
