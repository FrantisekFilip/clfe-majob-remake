import { Component, OnInit } from '@angular/core';
import { KnownRoutes } from 'src/app/known-routes';
import { CitizenInsuranceProduct } from 'src/app/products/services/citizen-insurance-product';
import { EmployeeInsuranceProduct } from 'src/app/products/services/employee-insurance-product';
import { ProductInfo } from 'src/app/products/services/product-info';
import { ProductService } from 'src/app/products/services/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public readonly routeCitizenApp = KnownRoutes.routeCitizenWizard;
  public readonly routeEmployeeApp = KnownRoutes.routeEmployeeWizard;
  private readonly _employeeInsurance: ProductInfo;
  private readonly _citizenInsurance: ProductInfo;

  public get citizenInsuranceName(): string {
    return this._citizenInsurance.shortName;
  }

  public get employeeInsuranceName(): string {
    return this._employeeInsurance.shortName;
  }

  public applicationRoute: string;

  constructor(products: ProductService) {
    this._citizenInsurance = products.GetProduct(CitizenInsuranceProduct);
    this._employeeInsurance = products.GetProduct(EmployeeInsuranceProduct);
  }

  ngOnInit(): void {
  }
}
