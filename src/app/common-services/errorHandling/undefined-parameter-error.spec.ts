import { UndefinedParameterError } from './undefined-parameter-error';

describe('UndefinedParameterError', () => {
  it('should create an instance', () => {
    expect(new UndefinedParameterError('PARAMETER_NAME')).toBeTruthy();
  });
});
