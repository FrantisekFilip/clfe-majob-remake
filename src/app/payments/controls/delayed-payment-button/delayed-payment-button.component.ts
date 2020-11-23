import { Component, Input, OnInit } from '@angular/core';
import { PaymentModel } from '../../models/payment-model';
import { PaymentsService } from '../../services/payments.service';


@Component({
  selector: 'app-delayed-payment-button',
  templateUrl: './delayed-payment-button.component.html',
  styleUrls: ['./delayed-payment-button.component.scss']
})
export class DelayedPaymentButtonComponent implements OnInit {
  @Input()
  public payment: PaymentModel;

  public get disabled(): boolean {
    return this.payment === null;
  }

  constructor(private readonly paymentsService: PaymentsService) {
  }

  ngOnInit(): void {
  }

  public onClick(e): void {
    if (!this.disabled) {
      this.paymentsService.executeDelayedPayment(this.payment);
    }
  }
}
