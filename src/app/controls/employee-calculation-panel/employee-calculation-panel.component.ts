import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { TerritorialScaleModel } from 'src/app/bu-services/models/enumerations';
import { Money } from 'src/app/common-services/types/money';
import { MoneyModel } from 'src/app/common-services/models/money-model';
import { EnumerationsService } from 'src/app/common-services/services/enumerations.service';
import { EmployeeInsuranceParametersModel } from 'src/app/models/employee-insurance-parameters-model';
import { AggregateIndemnityModel, EmployeeCoinsuranceModel } from 'src/app/models/enumerations';
import { EmployeeInsuranceProduct } from 'src/app/products/services/employee-insurance-product';
import { ApplicationDataService } from 'src/app/services/application-data.service';
import { ProductService } from 'src/app/products/services/product.service';
import { ApplicationModel } from 'src/app/models/application-model';
import { FormPanelDirective } from 'src/app/common-controls/forms/form-panel.directive';

@Component({
  selector: 'app-employee-calculation-panel',
  templateUrl: './employee-calculation-panel.component.html',
  styleUrls: ['./employee-calculation-panel.component.scss']
})
export class EmployeeCalculationPanelComponent extends FormPanelDirective implements OnInit {
  private readonly _productInfo: EmployeeInsuranceProduct;
  private _model: ApplicationModel;

  public get parametersModel(): EmployeeInsuranceParametersModel {
    if (!this._model.employeeInsuranceParameters) {
      this._model.employeeInsuranceParameters = new EmployeeInsuranceParametersModel(this._productInfo);
    }

    return this._model.employeeInsuranceParameters;
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

  public get entrustedThingsLossLimit(): MoneyModel {
    return this.parametersModel.entrustedThingsLossLimit;
  }

  public get mainVehicleChecked(): boolean {
    return this.parametersModel.mainVehicleChecked;
  }

  public set mainVehicleChecked(value: boolean) {
    this.parametersModel.mainVehicleChecked = value;
    this.RecalculateYearlyInsurance();
  }

  public get otherVehiclesChecked(): boolean {
    return this.parametersModel.otherVehiclesChecked;
  }

  public set otherVehiclesChecked(value: boolean) {
    this.parametersModel.otherVehiclesChecked = value;
    this.RecalculateYearlyInsurance();
  }

  public get noClaimBonus(): boolean {
    return this.parametersModel.noClaimBonus;
  }

  public get coinsurance(): string {
    return this.parametersModel.coinsurance.viewValue;
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

  constructor(private enumerations: EnumerationsService, dataService: ApplicationDataService, private productService: ProductService) {
    super();
    this.aggregateIndemnities = enumerations.getModelValues(AggregateIndemnityModel);
    this.territorialScales = enumerations.getModelValues(TerritorialScaleModel);
    this._productInfo = productService.GetProduct(EmployeeInsuranceProduct);
    this._model = dataService.application;
    this.parametersModel.coinsurance = enumerations.getModelValues(EmployeeCoinsuranceModel)[0];
    this.parametersModel.discount = this._productInfo.discount;
    this.parametersModel.entrustedThingsLossLimit = MoneyModel.FromMoney(this._productInfo.entrustedThingsLossLimit);
    this.parametersModel.noClaimBonus = this._productInfo.noClaimBonus;
  }

  protected OnConstruct(): { controlName: string, controls?: { [key: string]: AbstractControl; }[] } {
    return { controlName: 'EmployeeCalculationPanel' };
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
        [insurance?.value, this._model.citizenInsuranceParameters?.yearlyInsurance?.value]));
  }

  public onAggregateIndemnityChange(value: string): void {
    this.selectedAggregateIndemnity = value;
  }

  public onTerritorialScaleChange(value: string): void {
    this.selectedTerritorialScale = value;
  }
}
