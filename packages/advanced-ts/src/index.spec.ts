import { sum } from './index';

describe('index', () => {
  it('should sum two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
