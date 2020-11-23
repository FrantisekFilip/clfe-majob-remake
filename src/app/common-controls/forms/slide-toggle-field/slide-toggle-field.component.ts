import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormFieldDirective } from '../form-field.directive';

@Component({
  selector: 'app-slide-toggle-field',
  templateUrl: './slide-toggle-field.component.html',
  styleUrls: ['./slide-toggle-field.component.scss']
})
export class SlideToggleFieldComponent extends FormFieldDirective implements OnInit {
  private _checked: boolean;

  public get checked(): boolean {
    return this._checked;
  }

  @Input()
  public set checked(value: boolean) {
    this._checked = value;
    this.fieldControl.setValue(value);
  }

  @Output()
  public readonly valueChange: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
    super.ngOnInit();
  }

  public onChange(value: any): void {
    this.valueChange.emit(value.checked);
  }
}
