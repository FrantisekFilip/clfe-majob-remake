import { Money } from 'src/app/common-services/types/money';
import { EmployeeInsuranceProduct } from './employee-insurance-product';

describe('EmployeeInsuranceProduct', () => {
  it('should create an instance', () => {
    expect(new EmployeeInsuranceProduct('employee', 'emp', 0.1, new Money(10, 'CZK'), true)).toBeTruthy();
  });
});
