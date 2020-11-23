import { Injectable } from '@angular/core';
import { Money } from 'src/app/common-services/types/money';
import { CitizenCalculationParameters } from '../../services/citizen-calculation-parameters';
import { EmployeeCalculationParameters } from '../../services/employee-calculation-parameters';
import { CitizenInsuranceProduct } from './citizen-insurance-product';
import { EmployeeInsuranceProduct } from './employee-insurance-product';
import { CalculationParameters } from '../../services/calculation-parameters';
import { InstalmentFrequencyModel } from '../../bu-services/models/enumerations';
import { ProductInfo } from './product-info';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly _products: Map<string, ProductInfo> = new Map();

  constructor() {
    this._products.set(CitizenInsuranceProduct.name,
      new CitizenInsuranceProduct('Pojištění odpovědnosti vyplývající z činností v běžném občanském životě',
        'Pojištění odpovědnosti občanů', 0.2));
    this._products.set(EmployeeInsuranceProduct.name,
      new EmployeeInsuranceProduct('Pojištění odpovědnosti zaměstnance za škodu způsobenou zaměstnavateli',
        'Pojištění odpovědnosti zaměstnance', 0.2, new Money(50000, 'CZK'), true));
  }

  public GetProduct<T extends ProductInfo>(c: new (...args: any[]) => T): T {// TODO - wire to product catalog
    const productName: string = c.name;
    return this._products.get(productName) as T;
  }

  public GetProductInfo(code: string): ProductInfo {
    for (const [key, product] of this._products) {
      if (product.code === code) {
        return product;
      }
    }

    return null;
  }

  public calculateYearlyInsurance<T extends CalculationParameters>(data: T): Money {
    if (data.doApply) {
      if (data.product instanceof CitizenInsuranceProduct) {
        const citizenData = data as unknown as CitizenCalculationParameters;

        if (citizenData.aggregateIndemnity && citizenData.territorialScale && citizenData.discount && citizenData.coinsurance) {
          let result: Money = citizenData.aggregateIndemnity.value.value;
          result = Money.divide(result, citizenData.territorialScale.code === 'europe' ? 10 : 20);
          result = Money.multiply(result, citizenData.discount);
          result = Money.minus(result, citizenData.coinsurance.value.value);
          return result;
        }
      }
      else if (data.product instanceof EmployeeInsuranceProduct) {
        const employeeData = data as unknown as EmployeeCalculationParameters;

        if (employeeData.aggregateIndemnity && employeeData.territorialScale) {
          let result: Money = employeeData.aggregateIndemnity.value.value;
          result = Money.divide(result, employeeData.territorialScale.code === 'europe' ? 10 : 20);
          result = Money.multiply(result, employeeData.discount);
          return result;
        }
      }
    }

    return null;
  }

  public calculateTotalYearlyInsurance(partialTotals: Money[]): Money {
    return Money.sum(partialTotals); // TODO - improve based on product
  }

  public calculateInstalment(yearlyInsurance: Money, frequency: InstalmentFrequencyModel): Money {
    if (yearlyInsurance && frequency) {
      return Money.divide(yearlyInsurance, frequency.paymentsPerYear);
    }

    return null;
  }
}
