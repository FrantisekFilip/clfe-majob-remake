import { Injectable } from '@angular/core';
import { AgreementsModel } from '../models/agreements-model';
import { ApplicationModel } from '../models/application-model';
import { PaymentModel } from '../payments/models/payment-model';
import { RuntimeError } from 'src/app/common-services/errorHandling/runtime-error';
import { InsurancePeriodModel } from '../bu-services/models/insurance-period-model';
import { EnumerationsService } from '../common-services/services/enumerations.service';
import { ContractDurationModel } from '../bu-services/models/enumerations';

@Injectable({
  providedIn: 'root'
})
export class ApplicationDataService {
  private readonly _application: ApplicationModel;
  private _currentPayment: PaymentModel;

  public get application(): ApplicationModel {
    return this._application;
  }

  public get currentPayment(): PaymentModel {
    return this._currentPayment;
  }

  constructor(enumerations: EnumerationsService) {
    this._application = new ApplicationModel();
    const agreements = new AgreementsModel();
    agreements.preset(true);
    this.application.agreements = agreements;
    const insurancePeriod = new InsurancePeriodModel();
    insurancePeriod.period = 1;
    this._application.insurancePeriod = insurancePeriod;
    this._application.duration = enumerations.getByCode(ContractDurationModel, ContractDurationModel.indefiniteCode);
  }

  public recreatePayment(): void {
    if (this._currentPayment?.result?.success) {
      throw new RuntimeError('Platba již proběhla.');
    }

    const payment = new PaymentModel(); // TODO create real payment model, here just making sure it is not null
    payment.amount = this.application?.totalYearlyInsurance;
    this._currentPayment = payment;
  }
}
