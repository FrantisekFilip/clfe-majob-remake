import { Injectable } from '@angular/core';
import { PaymentModel } from '../models/payment-model';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  constructor() { }

  public executeDelayedPayment(payment: PaymentModel): boolean {
    alert('Delayed payment: ' + payment?.amount?.value.amount.toString());
    return false;
  }

  public executeExpressPayment(payment: PaymentModel): boolean {
    alert('Express payment: ' + payment?.amount?.value.amount.toString());
    return false;
  }
}
