import { Component, Input, OnInit, Output } from '@angular/core';
import { MoneyModel } from 'src/app/common-services/models/money-model';
import { LabelDirective } from '../label.directive';

@Component({
  selector: 'app-money-label',
  templateUrl: './money-label.component.html',
  styleUrls: ['./money-label.component.scss']
})
export class MoneyLabelComponent extends LabelDirective implements OnInit {
  @Input()
  public value: MoneyModel;

  public get formatted(): string {
    return this.value ? this.value.amount.toString() + ' ' + this.value.currency : null;
  }

  public get amount(): number {
    return this.value?.amount;
  }

  public get currency(): string {
    return this.value?.currency;
  }

  ngOnInit(): void {
  }
}
