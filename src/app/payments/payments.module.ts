import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';
import { CommonControlsModule } from 'src/app/common-controls/common-controls.module';
import { PaymentsService } from './services/payments.service';
import { ExpressPaymentButtonComponent } from './controls/express-payment-button/express-payment-button.component';
import { DelayedPaymentButtonComponent } from './controls/delayed-payment-button/delayed-payment-button.component';
import { PaymentSelectionPanelComponent } from './controls/payment-selection-panel/payment-selection-panel.component';

@NgModule({
  declarations: [
    ExpressPaymentButtonComponent,
    DelayedPaymentButtonComponent,
    PaymentSelectionPanelComponent
  ],
  imports: [
    CommonModule,
    FlexModule,
    CommonControlsModule
  ],
  exports:
    [
      ExpressPaymentButtonComponent,
      DelayedPaymentButtonComponent,
      PaymentSelectionPanelComponent
    ],
  providers: [PaymentsService],
})
export class PaymentsModule { }
