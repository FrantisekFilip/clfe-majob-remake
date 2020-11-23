import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { TerritorialScaleModel } from 'src/app/bu-services/models/enumerations';
import { EnumerationsService } from 'src/app/common-services/services/enumerations.service';
import { ApplicationDataService } from 'src/app/services/application-data.service';
import { ProductService } from 'src/app/products/services/product.service';
import { AggregateIndemnityModel, CoinsuranceModel } from '../../models/enumerations';
import { MoneyModel } from 'src/app/common-services/models/money-model';
import { Money } from 'src/app/common-services/types/money';
import { CitizenInsuranceProduct } from 'src/app/products/services/citizen-insurance-product';
import { CitizenInsuranceParametersModel } from 'src/app/models/citizen-insurance-parameters-model';
import { ApplicationModel } from 'src/app/models/application-model';
import { FormPanelDirective } from 'src/app/common-controls/forms/form-panel.directive';

@Component({
  selector: 'app-citizen-calculation-panel',
  templateUrl: './citizen-calculation-panel.component.html',
  styleUrls: ['./citizen-calculation-panel.component.scss']
})
export class CitizenCalculationPanelComponent extends FormPanelDirective implements OnInit {
  private readonly _productInfo: CitizenInsuranceProduct;
  private _model: ApplicationModel;

  public get parametersModel(): CitizenInsuranceParametersModel {
    if (!this._model.citizenInsuranceParameters) {
      this._model.citizenInsuranceParameters = new CitizenInsuranceParametersModel(this._productInfo);
    }

    return this._model.citizenInsuranceParameters;
  }

  public get selectedAggregateIndemnity(): string {
    return this.parametersModel.aggregateIndemnity?.code;
  }

  public set selectedAggregateIndemnity(value: string) {
    this.parametersModel.aggregateIndemnity = this.enumerations.getByCodeFromValues(this.aggregateIndemnities, value);
    this.RecalculateYearlyInsurance();
  }

  public get selectedTerritorialScale(): string {
    return this.parametersModel.territorialScale?.code;
  }

  public set selectedTerritorialScale(value: string) {
    this.parametersModel.territorialScale = this.enumerations.getByCodeFromValues(this.territorialScales, value);
    this.RecalculateYearlyInsurance();
  }

  public get selectedCoinsurance(): string {
    return this.parametersModel.coinsurance?.code;
  }

  public set selectedCoinsurance(value: string) {
    this.parametersModel.coinsurance = this.enumerations.getByCodeFromValues(this.coinsurances, value);
    this.RecalculateYearlyInsurance();
  }

  public get discount(): number {
    return this.parametersModel.discount;
  }

  public get yearlyInsurance(): MoneyModel {
    return this.parametersModel.yearlyInsurance;
  }

  public set yearlyInsurance(value: MoneyModel) {
    this.parametersModel.yearlyInsurance = value;
  }

  public readonly aggregateIndemnities: AggregateIndemnityModel[];

  public readonly territorialScales: TerritorialScaleModel[];

  public readonly coinsurances: CoinsuranceModel[];

  constructor(private enumerations: EnumerationsService, dataService: ApplicationDataService, private productService: ProductService) {
    super();
    this.aggregateIndemnities = enumerations.getModelValues(AggregateIndemnityModel);
    this.territorialScales = enumerations.getModelValues(TerritorialScaleModel);
    this.coinsurances = enumerations.getModelValues(CoinsuranceModel);
    this._productInfo = productService.GetProduct(CitizenInsuranceProduct);
    this._model = dataService.application;
    this.parametersModel.discount = this._productInfo.discount;
  }

  protected OnConstruct(): { controlName: string, controls?: { [key: string]: AbstractControl; }[] } {
    return { controlName: 'CitizenCalculationPanel' };
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  private RecalculateYearlyInsurance(): void {
    const result: Money = this.productService.calculateYearlyInsurance(this.parametersModel);
    let insurance = this.yearlyInsurance;

    if (result) {
      if (!insurance) {
        insurance = new MoneyModel();
      }

      insurance.value = result;
    }
    else {
      insurance = null;
    }

    this.yearlyInsurance = insurance;
    this._model.totalYearlyInsurance = MoneyModel.FromMoney(
      this.productService.calculateTotalYearlyInsurance(
        [insurance?.value, this._model.employeeInsuranceParameters?.yearlyInsurance?.value]));
    this._model.instalments.payment = MoneyModel.FromMoney(
      this.productService.calculateInstalment(this._model.totalYearlyInsurance.value, this._model.instalments?.frequency));
  }

  public onAggregateIndemnityChange(value: string): void {
    this.selectedAggregateIndemnity = value;
  }

  public onTerritorialScaleChange(value: string): void {
    this.selectedTerritorialScale = value;
  }

  public onCoinsuranceChange(value: string): void {
    this.selectedCoinsurance = value;
  }
}
