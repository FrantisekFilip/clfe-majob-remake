import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {
  public get language(): string {
    return this.translate.currentLang;
  }

  public set language(value: string) {
    this.translate.use(value ?? this.translate.defaultLang);
  }

  constructor(private readonly translate: TranslateService) {
  }
}
