import { LocalizedError } from './localized-error';

describe('GenericError', () => {
  it('should create an instance', () => {
    expect(new LocalizedError('TEST_CODE')).toBeTruthy();
  });
});
