import { IncompatibleCurrencyError } from './incompatible-currency-error';

describe('IncompatibleCurrencyError', () => {
  it('should create an instance', () => {
    expect(new IncompatibleCurrencyError()).toBeTruthy();
  });
});
