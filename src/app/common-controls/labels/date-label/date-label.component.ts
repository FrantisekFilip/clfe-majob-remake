import { Component, Input, OnInit } from '@angular/core';
import { LabelDirective } from '../label.directive';

@Component({
  selector: 'app-date-label',
  templateUrl: './date-label.component.html',
  styleUrls: ['./date-label.component.scss']
})
export class DateLabelComponent extends LabelDirective implements OnInit {
  @Input()
  public value: Date;

  public get formatted(): string {
    return this.value?.toDateString();
  }

  ngOnInit(): void {
  }
}
