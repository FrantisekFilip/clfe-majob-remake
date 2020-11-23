import { Component, Input, OnInit } from '@angular/core';
import { PaymentModel } from '../../models/payment-model';
import { PaymentsService } from '../../services/payments.service';

@Component({
  selector: 'app-express-payment-button',
  templateUrl: './express-payment-button.component.html',
  styleUrls: ['./express-payment-button.component.scss']
})
export class ExpressPaymentButtonComponent implements OnInit {
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
      this.paymentsService.executeExpressPayment(this.payment);
    }
  }
}
