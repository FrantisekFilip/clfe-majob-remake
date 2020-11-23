import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FormPanelDirective } from 'src/app/common-controls/forms/form-panel.directive';
import { CitizenInsuranceProduct } from 'src/app/products/services/citizen-insurance-product';
import { EmployeeInsuranceProduct } from 'src/app/products/services/employee-insurance-product';
import { ProductService } from 'src/app/products/services/product.service';

@Component({
  selector: 'app-citizen-application-panel',
  templateUrl: './citizen-application-panel.component.html',
  styleUrls: ['./citizen-application-panel.component.scss']
})
export class CitizenApplicationPanelComponent extends FormPanelDirective implements OnInit {
  private _employeeActive = false;

  public readonly citizenInsuranceProductName: string;

  public readonly employeeInsuranceProductName: string;

  constructor(productService: ProductService) {
    super();
    this.citizenInsuranceProductName = productService.GetProduct(CitizenInsuranceProduct).name;
    this.employeeInsuranceProductName = productService.GetProduct(EmployeeInsuranceProduct).name;
  }

  protected OnConstruct(): { controlName: string, controls?: { [key: string]: AbstractControl; }[] } {
    return { controlName: 'CitizenApplicationPanel' };
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  public isEmployeeActive(): boolean {
    return this._employeeActive;
  }

  public addOrRemoveEmployeeSection = (): void => {
    this._employeeActive = !this._employeeActive;
  }
}
