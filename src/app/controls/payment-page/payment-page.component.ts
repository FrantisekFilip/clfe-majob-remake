import { Component, Input, OnInit } from '@angular/core';
import { PaymentModel } from 'src/app/payments/models/payment-model';
import { ApplicationDataService } from 'src/app/services/application-data.service';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss']
})
export class PaymentPageComponent implements OnInit {

  @Input()
  public title: string;

  public payment: PaymentModel;

  constructor(dataService: ApplicationDataService) {
    dataService.recreatePayment();
    this.payment = dataService.currentPayment;
  }

  ngOnInit(): void {
  }
}
