import { Component, Input, OnInit } from '@angular/core';
import { LabelDirective } from '../label.directive';

@Component({
  selector: 'app-text-label',
  templateUrl: './text-label.component.html',
  styleUrls: ['./text-label.component.scss']
})
export class TextLabelComponent extends LabelDirective {
  @Input()
  public value: string;

  public get formatted(): string {
    return this.value;
  }
}
