import { RuntimeError } from './runtime-error';

describe('RuntimeError', () => {
  it('should create an instance', () => {
    expect(new RuntimeError()).toBeTruthy();
  });
});
