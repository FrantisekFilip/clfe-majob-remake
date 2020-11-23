import { Component, Input, OnInit } from '@angular/core';
import { LabelDirective } from '../label.directive';

@Component({
  selector: 'app-percent-label',
  templateUrl: './percent-label.component.html',
  styleUrls: ['./percent-label.component.scss']
})
export class PercentLabelComponent extends LabelDirective implements OnInit {
  private _value: number;
  private _formatted: string;

  @Input()
  public get value(): number {
    return this._value;
  }

  public set value(value: number) {
    this._value = value;
    this._formatted = value ? (value * 100).toString() + ' %' : null;
  }

  public get formattedValue(): string {
    return this._formatted;
  }

  @Input()
  public set formattedValue(value: string) {
    this._formatted = value;
    this._value = null;
  }

  public get formatted(): string {
    return this._formatted;
  }

  ngOnInit(): void {
  }
}
