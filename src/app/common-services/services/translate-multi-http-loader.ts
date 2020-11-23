import { HttpClient } from '@angular/common/http';
import { asapScheduler, Observable, scheduled } from 'rxjs';
import { mergeAll, reduce } from 'rxjs/operators';
import { TranslateLoader } from '@ngx-translate/core';

export class TranslateMultiHttpLoader implements TranslateLoader {
    constructor(private http: HttpClient, public prefixes: string[] = [], public root: string = '/assets/i18n/', public suffix: string = '.json') { }

    public getTranslation(lang: string): Observable<object> {
        const translations: Observable<object>[] = [this.getPartialTranslation(lang, '')];

        if (this.prefixes && this.prefixes.length > 0) {
            for (const prefix of this.prefixes) {
                translations.push(this.getPartialTranslation(lang, prefix + '-'));
            }

            return scheduled(translations, asapScheduler).pipe(mergeAll(), reduce((acc, next) => Object.assign(acc, next)));
        }
    }

    private getPartialTranslation(lang: string, prefix: string): Observable<object> {
        return this.http.get(`${this.root}${prefix}${lang}${this.suffix}`);
    }
}
