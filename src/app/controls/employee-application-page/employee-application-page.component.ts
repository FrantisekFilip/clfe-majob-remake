import { Component, OnInit } from '@angular/core';
import { EmployeeInsuranceProduct } from 'src/app/products/services/employee-insurance-product';

@Component({
  selector: 'app-employee-application-page',
  templateUrl: './employee-application-page.component.html',
  styleUrls: ['./employee-application-page.component.scss']
})
export class EmployeeApplicationPageComponent implements OnInit {
  public readonly productCode = EmployeeInsuranceProduct.productCode;

  constructor() { }

  ngOnInit(): void {
  }
}
