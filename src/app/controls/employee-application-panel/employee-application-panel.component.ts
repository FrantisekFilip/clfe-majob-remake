import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FormPanelDirective } from 'src/app/common-controls/forms/form-panel.directive';
import { CitizenInsuranceProduct } from 'src/app/products/services/citizen-insurance-product';
import { EmployeeInsuranceProduct } from 'src/app/products/services/employee-insurance-product';
import { ProductService } from 'src/app/products/services/product.service';

@Component({
  selector: 'app-employee-application-panel',
  templateUrl: './employee-application-panel.component.html',
  styleUrls: ['./employee-application-panel.component.scss']
})
export class EmployeeApplicationPanelComponent extends FormPanelDirective implements OnInit {
  private _citizenActive = false;

  public readonly citizenInsuranceProductName: string;

  public readonly employeeInsuranceProductName: string;

  constructor(productService: ProductService) {
    super();
    this.citizenInsuranceProductName = productService.GetProduct(CitizenInsuranceProduct).name;
    this.employeeInsuranceProductName = productService.GetProduct(EmployeeInsuranceProduct).name;
  }

  protected OnConstruct(): { controlName: string, controls?: { [key: string]: AbstractControl; }[] } {
    return { controlName: 'EmployeeApplicationPanel' };
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  public isCitizenActive(): boolean {
    return this._citizenActive;
  }

  public addOrRemoveCitizenSection = (): void => {
    this._citizenActive = !this._citizenActive;
  }
}
