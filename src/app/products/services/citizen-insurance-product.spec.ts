import { CitizenInsuranceProduct } from './citizen-insurance-product';

describe('CitizenInsuranceProduct', () => {
  it('should create an instance', () => {
    expect(new CitizenInsuranceProduct('citizen', 'cit', 0.1)).toBeTruthy();
  });
});
