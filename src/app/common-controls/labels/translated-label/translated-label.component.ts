import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-translated-label',
  templateUrl: './translated-label.component.html',
  styleUrls: ['./translated-label.component.scss']
})
export class TranslatedLabelComponent implements OnInit, OnDestroy {
  private _label: string;
  private _labelChange: Subscription;
  private _viewHtml: SafeHtml;

  public get label(): string {
    return this._label;
  }

  @Input()
  public set label(value: string) {
    this._label = value;

    if (this._labelChange) {
      this._labelChange.unsubscribe();
    }

    this._labelChange = this.translate.get(this._label).subscribe({
      next: (translated: string) => this._viewHtml = this.sanitizer.bypassSecurityTrustHtml(translated)
    }
    );
  }

  public get viewHtml(): SafeHtml {
    return this._viewHtml;
  }

  constructor(private readonly translate: TranslateService, private readonly sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this._labelChange?.unsubscribe();
  }

}
