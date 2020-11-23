import { Component, Input, OnInit } from '@angular/core';
import { PaymentModel } from '../../models/payment-model';

@Component({
  selector: 'app-payment-selection-panel',
  templateUrl: './payment-selection-panel.component.html',
  styleUrls: ['./payment-selection-panel.component.scss']
})
export class PaymentSelectionPanelComponent implements OnInit {
  @Input()
  public payment: PaymentModel;

  @Input()
  public isRetry: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  public showRetryMessage(): boolean {
    return this.isRetry;
  }
}
