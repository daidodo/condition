import {
  assertIsNumber,
  isNumber,
} from './';

type A = (number | string)[];

describe('Suite 1', () => {
  it('should pass the test', () => {
    const a: A = [1, 2, '3', 4];
    // const r0 = a.filter((n): n is number => typeof n === 'number');
    const r1 = a.filter(isNumber);
    expect(r1).toStrictEqual([1, 2, 4]);
  });
});
describe('Suite 2', () => {
  it('should pass the test', () => {
    const b: A = [1, 2, 3];
    const r2 = b.map(n => {
      assertIsNumber(n);
      return n;
    });
    expect(r2).toStrictEqual([1, 2, 3]);
    // const r3 = a.filter(isType<number>);
  });
});
