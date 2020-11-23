import { TranslateService } from '@ngx-translate/core';
import { UndefinedParameterError } from '../errorHandling/undefined-parameter-error';
import { LocalizedMessage } from '../services/localized-message';
import { nameof } from '../utils';

export class UserMessage implements LocalizedMessage {
    public readonly code: string;

    public readonly params: string[];

    constructor(code: string, params?: string[]) {
        if (!code) {
            throw new UndefinedParameterError(nameof(code));
        }

        this.code = code;
        this.params = params;
    }

    public static translateMessage(translateService: TranslateService, key: string, parameters?: string[]): string {
        return UserMessage.formatMessage(translateService.instant(key), parameters);
    }

    public static formatMessage(template: string, parameters?: string[]): string {
        return template.replace(/{(\d+)}/g, (match, index) => {
            return typeof parameters[index] !== 'undefined'
                ? parameters[index]
                : match
                ;
        });
    }

    public translate(translateService: TranslateService): string {
        return UserMessage.translateMessage(translateService, this.code, this.params);
    }
}
