import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AddressModel } from 'src/app/bu-services/models/address-model';
import { ClientInfoModel } from 'src/app/bu-services/models/client-info-model';
import { ContractDurationModel, InstalmentFrequencyModel } from 'src/app/bu-services/models/enumerations';
import { EmailModel } from 'src/app/common-services/models/email-model';
import { MoneyModel } from 'src/app/common-services/models/money-model';
import { PhoneNumberModel } from 'src/app/common-services/models/phone-number-model';
import { ApplicationModel } from 'src/app/models/application-model';
import { ProductInfo } from 'src/app/products/services/product-info';
import { ApplicationDataService } from 'src/app/services/application-data.service';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.scss']
})
export class SummaryPageComponent implements OnInit {
  private _model: ApplicationModel;

  public get products(): ProductInfo[] {
    return this._model.products;
  }

  public get commencementDate(): Date {
    return this._model.commencementDate;
  }

  public get insurancePeriod(): string {
    return this._model.insurancePeriod.viewValue(this.translate);
  }

  public get contractDuration(): ContractDurationModel {
    return this._model.duration;
  }

  public get policyHolder(): ClientInfoModel {
    return this._model.policyHolder;
  }

  public get mainAddress(): AddressModel {
    return this._model.mainAddress;
  }

  public get hasInsuredPerson(): boolean {
    return (this._model.insuredPerson?.doApply) ?? false;
  }

  public get insuredPersonName(): string {
    return this._model.insuredPerson?.name;
  }

  public get email(): EmailModel {
    return this._model.policyHolder?.email;
  }

  public get phoneNumber(): PhoneNumberModel {
    return this._model.policyHolder?.phoneNumber;
  }

  public get totalYearlyInsurance(): MoneyModel {
    return this._model.totalYearlyInsurance;
  }

  public get instalmentFrequency(): InstalmentFrequencyModel {
    return this._model.instalments?.frequency;
  }

  public get payment(): MoneyModel {
    return this._model.instalments?.payment;
  }

  @Input()
  public title: string;

  constructor(dataService: ApplicationDataService, private readonly translate: TranslateService) {
    this._model = dataService.application;
  }

  ngOnInit(): void {
  }
}
