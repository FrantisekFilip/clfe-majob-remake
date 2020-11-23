import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-vertical-stepper-header-button',
  templateUrl: './vertical-stepper-header-button.component.html',
  styleUrls: ['./vertical-stepper-header-button.component.scss']
})
export class VerticalStepperHeaderButtonComponent implements OnInit {
  private _active = false;

  public get active(): boolean {
    return this._active;
  }

  @Input()
  public set active(value: boolean) {
    this._active = value;
  }

  @Input()
  public last: boolean;

  @Output()
  public stepClick = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

  emitClick(): void {
    this.stepClick.emit();
  }
}
