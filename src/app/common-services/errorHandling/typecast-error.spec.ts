import { TypecastError } from './typecast-error';

describe('TypecastError', () => {
  it('should create an instance', () => {
    expect(new TypecastError()).toBeTruthy();
  });
});
