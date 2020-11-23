import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StepperSelectionEvent } from '@angular/cdk/stepper/public-api';
import { ActivatedRoute, Router } from '@angular/router';
import { KnownRoutes } from 'src/app/known-routes';
import { StepNames } from './step-names';
import { CitizenInsuranceProduct } from 'src/app/products/services/citizen-insurance-product';
import { EmployeeInsuranceProduct } from 'src/app/products/services/employee-insurance-product';
import { ProductService } from 'src/app/products/services/product.service';
import { ApplicationDataService } from 'src/app/services/application-data.service';

@Component({
  selector: 'app-application-wizard',
  templateUrl: './application-wizard.component.html',
  styleUrls: ['./application-wizard.component.scss'],
  providers: [ApplicationDataService]
})
export class ApplicationWizardComponent implements OnInit {
  public readonly homeRoute = KnownRoutes.routeHome;
  private _productName: string;
  public selectedIndex = 0;
  public calcForm: FormGroup;
  public addInfoForm: FormGroup;
  public summaryPage: FormGroup;
  public paymentPage: FormGroup;
  public finalPage: FormGroup;

  @Input()
  public productCode: string;

  public get productName(): string {
    return this._productName;
  }

  public get showTerms(): boolean {
    return this.selectedIndex === 0;
  }

  constructor(private router: Router, private routes: ActivatedRoute, private readonly products: ProductService) {
    this.calcForm = new FormGroup({});
    this.addInfoForm = new FormGroup({});
    this.summaryPage = new FormGroup({});
    this.paymentPage = new FormGroup({});
    this.finalPage = new FormGroup({});
  }

  ngOnInit(): void {
    this.routes.queryParams.subscribe(param => {
      const step = param[0];

      if (step === StepNames.addInfoStepName) {
        this.selectedIndex = 1;
      }
      else if (step === StepNames.summaryStepName) {
        this.selectedIndex = 2;
      }
      else if (step === StepNames.paymentStepName) {
        this.selectedIndex = 3;
      } else if (step === StepNames.finalStepName) {
        this.selectedIndex = 4;

      } else {
        this.selectedIndex = 0;
      }
    });

    this._productName = this.products.GetProductInfo(this.productCode)?.shortName;
  }

  submit(): void {
  }

  public isCitizenInsurance(): boolean {
    return this.productCode === CitizenInsuranceProduct.productCode;
  }

  public isEmployeeInsurance(): boolean {
    return this.productCode === EmployeeInsuranceProduct.productCode;
  }

  public stepperChanged(event: StepperSelectionEvent): void {
    let stepName: string;

    if (event.selectedIndex === 0) {
      stepName = StepNames.calcStepName;
    }
    else if (event.selectedIndex === 1) {
      stepName = StepNames.addInfoStepName;
    }
    else if (event.selectedIndex === 2) {
      stepName = StepNames.summaryStepName;
    }
    else if (event.selectedIndex === 3) {
      stepName = StepNames.paymentStepName;
    }
    else {
      stepName = StepNames.finalStepName;
    }

    this.router.navigate([], { queryParams: { step: stepName } });
  }
}
