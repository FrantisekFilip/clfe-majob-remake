import { ChangeDetectorRef, Injectable, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Injectable()
@Pipe({
  name: 'richTranslate',
  pure: false
})
export class RichTranslatePipe extends TranslatePipe implements PipeTransform, OnDestroy {

  constructor(translate: TranslateService, _ref: ChangeDetectorRef, private readonly sanitizer: DomSanitizer) {
    super(translate, _ref);
  }

  public transform(value: any, ...args: any[]): any {
    const transformed = super.transform(value, args);
    return this.sanitizer.bypassSecurityTrustHtml(transformed);
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
