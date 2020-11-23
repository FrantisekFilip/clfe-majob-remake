import { Component, Input, OnInit } from '@angular/core';
import { PaymentModel } from 'src/app/payments/models/payment-model';
import { ApplicationDataService } from 'src/app/services/application-data.service';

@Component({
  selector: 'app-final-page',
  templateUrl: './final-page.component.html',
  styleUrls: ['./final-page.component.scss']
})
export class FinalPageComponent implements OnInit {

  @Input()
  public title: string;

  public payment: PaymentModel;

  constructor(dataService: ApplicationDataService) {
    this.payment = dataService.currentPayment;
  }

  ngOnInit(): void {
  }

  public paymentSucceeded(): boolean {
    return true; // TODO - remove after payments are implemented
    // return this.payment?.result?.success;
  }
}
