import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { InstalmentFrequencyModel } from 'src/app/bu-services/models/enumerations';
import { FormPanelDirective } from 'src/app/common-controls/forms/form-panel.directive';
import { MoneyModel } from 'src/app/common-services/models/money-model';
import { EnumerationsService } from 'src/app/common-services/services/enumerations.service';
import { ApplicationModel } from 'src/app/models/application-model';
import { InstalmentsModel } from 'src/app/bu-services/models/instalments-model';
import { ApplicationDataService } from 'src/app/services/application-data.service';
import { ProductService } from 'src/app/products/services/product.service';

@Component({
  selector: 'app-calculation-summary-panel',
  templateUrl: './calculation-summary-panel.component.html',
  styleUrls: ['./calculation-summary-panel.component.scss']
})
export class CalculationSummaryPanelComponent extends FormPanelDirective implements OnInit {
  private _model: ApplicationModel;

  public get parametersModel(): InstalmentsModel {
    if (!this._model.instalments) {
      this._model.instalments = new InstalmentsModel();
    }

    return this._model.instalments;
  }

  public get selectedInstalmentFrequency(): string {
    return this._model.instalments.frequency.code;
  }

  public set selectedInstalmentFrequency(value: string) {
    this._model.instalments.frequency = this.enumerations.getByCodeFromValues(this.instalmentFrequencies, value);
    this.RecalculateInstalment();
  }

  public get payment(): MoneyModel {
    return this.parametersModel.payment;
  }

  public get totalYearlyInsurance(): MoneyModel {
    return this._model.totalYearlyInsurance;
  }

  public readonly instalmentFrequencies: InstalmentFrequencyModel[];

  constructor(private enumerations: EnumerationsService, dataService: ApplicationDataService, private productService: ProductService) {
    super();
    this.instalmentFrequencies = enumerations.getModelValues(InstalmentFrequencyModel);
    this._model = dataService.application;

    if (!this._model.instalments) {
      this._model.instalments = new InstalmentsModel();
      this.selectedInstalmentFrequency = enumerations.getByCode(InstalmentFrequencyModel, InstalmentFrequencyModel.yearlyCode).code;
    }
  }

  protected OnConstruct(): { controlName: string, controls?: { [key: string]: AbstractControl; }[] } {
    return { controlName: 'CalculationSummaryPanel' };
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  private RecalculateInstalment(): void {
    if (this._model.totalYearlyInsurance) {
      this.parametersModel.payment = MoneyModel.FromMoney(this.productService.calculateInstalment(
        this._model.totalYearlyInsurance.value, this.parametersModel.frequency));
    }
  }

  public onInstalmentFrequencyChange(value: string): void {
    this.selectedInstalmentFrequency = value;
  }
}
