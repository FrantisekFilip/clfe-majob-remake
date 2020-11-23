import { Directive, Input, OnInit } from '@angular/core';
import { BasicControlDirective } from '../basic-control.directive';
import { LabelPosition } from './../label-position';

@Directive()
export abstract class ButtonDirective extends BasicControlDirective implements OnInit {
  private _defaultIcon: string;
  private _icon: string;

  public get icon(): string {
    return this._icon;
  }

  @Input()
  public set icon(value: string) {
    if (value) {
      this._icon = value;
    }
    else {
      this._icon = this._defaultIcon;
    }
  }

  @Input()
  public action: () => void;

  public get iconBeforeContent(): boolean {
    return this.icon && this.labelPosition === LabelPosition.After;
  }

  public get iconAfterContent(): boolean {
    return this.icon && this.labelPosition === LabelPosition.Before;
  }

  protected OnConstruct(): { defaultIcon: string } {
    return { defaultIcon: null };
  }

  ngOnInit(): void {
    const metadata = this.OnConstruct();
    this._defaultIcon = metadata.defaultIcon;

    if (!this._icon) {
      this._icon = this._defaultIcon;
    }
  }
}
