import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BasicControlDirective } from '../basic-control.directive';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss']
})
export class CheckBoxComponent extends BasicControlDirective implements OnInit {
  // TODO - replace with LabelPosition enum
  @Input()
  public checked: boolean;

  @Output()
  public readonly valueChange: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
  }

  public onChange(value: any): void {
    this.valueChange.emit(value);
  }
}
