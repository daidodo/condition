import {
  assertIsBigint,
  assertIsBoolean,
  assertIsClass,
  assertIsNumber,
  assertIsString,
  assertNonNull,
  assertTrue,
  isBigint,
  isBoolean,
  isClass,
  isNonNull,
  isNumber,
  isString,
} from './';

describe('assertTrue', () => {
  const a: unknown = 'abc';
  describe('With condition', () => {
    it('should pass when condition is met', () => {
      // a.length; // expect a compiler error
      assertTrue(typeof a === 'string');
      expect(a.length).toBeGreaterThanOrEqual(0);
    });
    it('should throw when condition is not met', () => {
      expect(() => assertTrue(typeof a === 'number')).toThrowError('Expected true but got false.');
    });
    describe('With message', () => {
      it('should throw error with message', () => {
        expect(() => assertTrue(typeof a === 'number', 'I need a number')).toThrowError(
          'I need a number.',
        );
      });
      describe('With props', () => {
        it('should throw error with props', () => {
          expect(() =>
            assertTrue(typeof a === 'number', 'I need a number', { p1: 3 }),
          ).toThrowError('I need a number, props = {"p1":3}.');
        });
      });
    });
  });
});

describe('isNonNull', () => {
  describe('Given non-null value', () => {
    it('should return true', () => {
      expect(isNonNull('')).toBe(true);
      expect(isNonNull(false)).toBe(true);
      expect(isNonNull(0)).toBe(true);
      expect(isNonNull({})).toBe(true);
    });
  });
  describe('Given null or undefined', () => {
    it('should return false', () => {
      expect(isNonNull(null)).toBe(false);
      expect(isNonNull(undefined)).toBe(false);
    });
  });
  describe('Used in array', () => {
    const a = [undefined, 'abc', null, 'cde'];
    // a[0].length; // expect a compiler error
    it('should assert non-null values', () => {
      const b = a.filter(isNonNull);
      expect(b).toStrictEqual(['abc', 'cde']);
      expect(b[0].length).toBeGreaterThanOrEqual(0);
    });
  });
});

describe('assertNonNull', () => {
  describe('Given non-null value', () => {
    const a: { x?: string } = { x: 'abc' };
    // a.x.length; // expect a compiler error
    it('should pass', () => {
      assertNonNull(a.x);
      expect(a.x.length).toBeGreaterThanOrEqual(0);
    });
  });
  describe('Given null or undefined', () => {
    it('should throw error', () => {
      expect(() => assertNonNull(null)).toThrowError('Expected non-null value but got null.');
      expect(() => assertNonNull(undefined)).toThrowError(
        'Expected non-null value but got undefined.',
      );
    });
    describe('With message', () => {
      it('should throw error with message', () => {
        expect(() => assertNonNull(undefined, 'I need a value')).toThrowError('I need a value.');
      });
      describe('With props', () => {
        it('should throw error with props', () => {
          expect(() => assertNonNull(undefined, 'I need a value', { p1: true })).toThrowError(
            'I need a value, props = {"p1":true}.',
          );
        });
      });
    });
  });
  describe('Used in array', () => {
    const a: (string | undefined)[] = ['abc', 'def'];
    // a[0].length;  // expect a compiler error
    it('should assert non-null values', () => {
      const b = a.map(n => {
        assertNonNull(n);
        return n;
      });
      expect(b).toStrictEqual(['abc', 'def']);
      expect(b[0].length).toBeGreaterThanOrEqual(0);
    });
  });
});

describe('isNumber', () => {
  describe('Given a number', () => {
    it('should return true', () => {
      expect(isNumber(0)).toBe(true);
    });
  });
  describe('Given not a number', () => {
    it('should return false', () => {
      expect(isNumber(null)).toBe(false);
      expect(isNumber(undefined)).toBe(false);
      expect(isNumber('0')).toBe(false);
      expect(isNumber(true)).toBe(false);
      expect(isNumber({})).toBe(false);
    });
  });
  describe('Used in array', () => {
    const a = ['1', 2, '3', 4];
    // a[0] + 1; // expect a compiler error
    it('should assert number values', () => {
      const b = a.filter(isNumber);
      expect(b).toStrictEqual([2, 4]);
      expect(b[0] + 1).toBe(3);
    });
  });
});

describe('assertIsNumber', () => {
  describe('Given a number', () => {
    const a: { x: string | number } = { x: 3 };
    // a.x + 1; // expect a compiler error
    it('should pass', () => {
      assertIsNumber(a.x);
      expect(a.x + 1).toBe(4);
    });
  });
  describe('Given not a number', () => {
    it('should throw error', () => {
      expect(() => assertIsNumber(null)).toThrowError('Expected a number but got null.');
      expect(() => assertIsNumber(undefined)).toThrowError('Expected a number but got undefined.');
      expect(() => assertIsNumber(false)).toThrowError('Expected a number but got false.');
      expect(() => assertIsNumber('')).toThrowError("Expected a number but got ''.");
      expect(() => assertIsNumber({})).toThrowError('Expected a number but got {}.');
      expect(() => assertIsNumber({ x: 123 })).toThrowError('Expected a number but got {"x":123}.');
      expect(() => assertIsNumber(assertIsNumber)).toThrowError(
        'Expected a number but got Function.',
      );
      expect(() => assertIsNumber([1, 2, 3])).toThrowError('Expected a number but got [1,2,3].');
    });
  });
  describe('Used in array', () => {
    const a: (number | string)[] = [1, 2, 3];
    // a[0] + 1; // expect a compiler error
    it('should assert number values', () => {
      const b = a.map(n => {
        assertIsNumber(n);
        return n;
      });
      expect(b).toStrictEqual([1, 2, 3]);
      expect(b[0] + 1).toBe(2);
    });
  });
});

describe('isString', () => {
  describe('Given a string', () => {
    it('should return true', () => {
      expect(isString('')).toBe(true);
      expect(isString('abc')).toBe(true);
    });
  });
  describe('Given not a string', () => {
    it('should return false', () => {
      expect(isString(null)).toBe(false);
      expect(isString(undefined)).toBe(false);
      expect(isString(0)).toBe(false);
      expect(isString(true)).toBe(false);
      expect(isString({})).toBe(false);
    });
  });
  describe('Used in array', () => {
    const a = ['1', 2, '3', 4];
    // a[0].length; // expect a compiler error
    it('should assert string values', () => {
      const b = a.filter(isString);
      expect(b).toStrictEqual(['1', '3']);
      expect(b[0].length).toBeGreaterThanOrEqual(0);
    });
  });
});

describe('assertIsString', () => {
  describe('Given a string', () => {
    const a: { x: string | number } = { x: 'abc' };
    // a.x.length; // expect a compiler error
    it('should pass', () => {
      assertIsString(a.x);
      expect(a.x.length).toBeGreaterThanOrEqual(0);
    });
  });
  describe('Given not a string', () => {
    it('should throw error', () => {
      expect(() => assertIsString(null)).toThrowError('Expected a string but got null.');
      expect(() => assertIsString(undefined)).toThrowError('Expected a string but got undefined.');
      expect(() => assertIsString(false)).toThrowError('Expected a string but got false.');
      expect(() => assertIsString(0)).toThrowError('Expected a string but got 0.');
      expect(() => assertIsString({})).toThrowError('Expected a string but got {}.');
      expect(() => assertIsString({ x: 123 })).toThrowError('Expected a string but got {"x":123}.');
      expect(() => assertIsString(assertIsNumber)).toThrowError(
        'Expected a string but got Function.',
      );
      expect(() => assertIsString([1, 2, 3])).toThrowError('Expected a string but got [1,2,3].');
    });
  });
  describe('Used in array', () => {
    const a: (number | string)[] = ['abc', 'def'];
    // a[0].length; // expect a compiler error
    it('should assert string values', () => {
      const b = a.map(n => {
        assertIsString(n);
        return n;
      });
      expect(b).toStrictEqual(['abc', 'def']);
      expect(b[0].length).toBeGreaterThanOrEqual(0);
    });
  });
});

describe('isBoolean', () => {
  describe('Given a boolean', () => {
    it('should return true', () => {
      expect(isBoolean(true)).toBe(true);
      expect(isBoolean(false)).toBe(true);
    });
  });
  describe('Given not a boolean', () => {
    it('should return false', () => {
      expect(isBoolean(null)).toBe(false);
      expect(isBoolean(undefined)).toBe(false);
      expect(isBoolean(0)).toBe(false);
      expect(isBoolean('true')).toBe(false);
      expect(isBoolean({})).toBe(false);
    });
  });
  describe('Used in array', () => {
    const a = [false, 2, '3', true];
    const f = (b: boolean) => 1;
    // f(a[0]); // expect a compiler error
    it('should assert string values', () => {
      const b = a.filter(isBoolean);
      expect(b).toStrictEqual([false, true]);
      expect(f(b[0])).toBe(1);
    });
  });
});

describe('assertIsBoolean', () => {
  const f = (b: boolean) => 1;
  describe('Given a boolean', () => {
    const a: { x: string | boolean } = { x: true };
    // f(a.x); // expect a compiler error
    it('should pass', () => {
      assertIsBoolean(a.x);
      expect(f(a.x)).toBe(1);
    });
  });
  describe('Given not a boolean', () => {
    it('should throw error', () => {
      expect(() => assertIsBoolean(null)).toThrowError('Expected a boolean but got null.');
      expect(() => assertIsBoolean(undefined)).toThrowError(
        'Expected a boolean but got undefined.',
      );
      expect(() => assertIsBoolean('false')).toThrowError("Expected a boolean but got 'false'.");
      expect(() => assertIsBoolean(0)).toThrowError('Expected a boolean but got 0.');
      expect(() => assertIsBoolean({})).toThrowError('Expected a boolean but got {}.');
      expect(() => assertIsBoolean({ x: 123 })).toThrowError(
        'Expected a boolean but got {"x":123}.',
      );
      expect(() => assertIsBoolean(assertIsNumber)).toThrowError(
        'Expected a boolean but got Function.',
      );
      expect(() => assertIsBoolean([1, 2, 3])).toThrowError('Expected a boolean but got [1,2,3].');
    });
  });
  describe('Used in array', () => {
    const a: (boolean | string)[] = [true, false];
    // f(a[0]); // expect a compiler error
    it('should assert values', () => {
      const b = a.map(n => {
        assertIsBoolean(n);
        return n;
      });
      expect(b).toStrictEqual([true, false]);
      expect(f(b[0])).toBe(1);
    });
  });
});

describe('isBigint', () => {
  const funcToTest = isBigint;
  const f = (a: bigint) => 1;
  describe('Given valid value', () => {
    it('should return true', () => {
      expect(funcToTest(BigInt(0))).toBe(true);
      expect(funcToTest(BigInt(10))).toBe(true);
    });
  });
  describe('Given invalid value', () => {
    it('should return false', () => {
      expect(funcToTest(null)).toBe(false);
      expect(funcToTest(undefined)).toBe(false);
      expect(funcToTest('0')).toBe(false);
      expect(funcToTest(0)).toBe(false);
      expect(funcToTest(true)).toBe(false);
      expect(funcToTest({})).toBe(false);
    });
  });
  describe('Used in array', () => {
    const a = [1, BigInt(2), '3', 4];
    // f(a[0]); // expect a compiler error
    it('should assert values', () => {
      const b = a.filter(funcToTest);
      expect(b).toStrictEqual([BigInt(2)]);
      expect(f(b[0])).toBe(1);
    });
  });
});

describe('assertIsBigint', () => {
  const f = (b: bigint) => 1;
  const a: { x: string | bigint } = { x: BigInt(1) };
  const aa = [a.x];
  describe('Given valid value', () => {
    // f(a.x); // expect a compiler error
    it('should pass', () => {
      assertIsBigint(a.x);
      expect(f(a.x)).toBe(1);
    });
  });
  describe('Given invalid value', () => {
    it('should throw error', () => {
      expect(() => assertIsBigint(null)).toThrowError('Expected a bigint but got null.');
      expect(() => assertIsBigint(undefined)).toThrowError('Expected a bigint but got undefined.');
      expect(() => assertIsBigint(false)).toThrowError('Expected a bigint but got false.');
      expect(() => assertIsBigint('false')).toThrowError("Expected a bigint but got 'false'.");
      expect(() => assertIsBigint(0)).toThrowError('Expected a bigint but got 0.');
      expect(() => assertIsBigint({})).toThrowError('Expected a bigint but got {}.');
      expect(() => assertIsBigint({ x: 123 })).toThrowError('Expected a bigint but got {"x":123}.');
      expect(() => assertIsBigint(assertIsNumber)).toThrowError(
        'Expected a bigint but got Function.',
      );
      expect(() => assertIsBigint([1, 2, 3])).toThrowError('Expected a bigint but got [1,2,3].');
    });
  });
  describe('Used in array', () => {
    // f(aa[0]); // expect a compiler error
    it('should assert values', () => {
      const b = aa.map(v => {
        assertIsBigint(v);
        return v;
      });
      expect(b).toStrictEqual([BigInt(1)]);
      expect(f(b[0])).toBe(1);
    });
  });
});

describe('isClass', () => {
  class A {
    a() {
      return 1;
    }
  }
  class AA extends A {
    constructor(a: number) {
      super();
    }
    aa() {
      return 2;
    }
  }
  class B {}
  describe('With constructor without params', () => {
    const funcToTest = isClass(A);
    describe('Given valid value', () => {
      it('should return true', () => {
        expect(funcToTest(new A())).toBe(true);
        expect(funcToTest(new AA(1))).toBe(true);
      });
    });
    describe('Given invalid value', () => {
      it('should return false', () => {
        expect(funcToTest(null)).toBe(false);
        expect(funcToTest(undefined)).toBe(false);
        expect(funcToTest('0')).toBe(false);
        expect(funcToTest(0)).toBe(false);
        expect(funcToTest(true)).toBe(false);
        expect(funcToTest({})).toBe(false);
        expect(funcToTest(new B())).toBe(false);
      });
    });
    describe('Used in array', () => {
      const a = [1, BigInt(2), '3', new A(), new AA(1), new B()];
      // a[0].a(); // expect a compiler error
      it('should assert values', () => {
        const b = a.filter(funcToTest);
        expect(b).toStrictEqual([new A(), new AA(2)]);
        expect(b[0].a()).toBe(1);
      });
    });
    describe('For subclass', () => {
      const funcToTest = isClass(AA);
      describe('Given valid value', () => {
        it('should return true', () => {
          expect(funcToTest(new AA(3))).toBe(true);
        });
      });
      describe('Given invalid value', () => {
        it('should return false', () => {
          expect(funcToTest(null)).toBe(false);
          expect(funcToTest(undefined)).toBe(false);
          expect(funcToTest('0')).toBe(false);
          expect(funcToTest(0)).toBe(false);
          expect(funcToTest(true)).toBe(false);
          expect(funcToTest({})).toBe(false);
          expect(funcToTest(new A())).toBe(false);
          expect(funcToTest(new B())).toBe(false);
        });
      });
      describe('Used in array', () => {
        const a = [1, BigInt(2), '3', new A(), new AA(4), new B()];
        // a[0].aa(); // expect a compiler error
        it('should assert values', () => {
          const b = a.filter(funcToTest);
          expect(b).toStrictEqual([new AA(5)]);
          expect(b[0].aa()).toBe(2);
        });
      });
    });
  });
});

describe('assertIsClass', () => {
  class A {
    a() {
      return 1;
    }
  }
  class AA extends A {
    constructor(a: number) {
      super();
    }
    aa() {
      return 2;
    }
  }
  class B {}
  const a: { x: string | A; y: AA | B } = { x: new A(), y: new AA(1) };
  describe('For superclass', () => {
    describe('Given valid value', () => {
      // a.x.a(); // expect a compiler error
      // a.y.a(); // expect a compiler error
      it('should pass', () => {
        assertIsClass(A, a.x);
        expect(a.x.a()).toBe(1);
        assertIsClass(A, a.y);
        expect(a.y.a()).toBe(1);
      });
    });
    describe('Given invalid value', () => {
      it('should throw error', () => {
        expect(() => assertIsClass(A, null)).toThrowError('Expected class A but got null.');
        expect(() => assertIsClass(A, undefined)).toThrowError(
          'Expected class A but got undefined.',
        );
        expect(() => assertIsClass(A, false)).toThrowError('Expected class A but got false.');
        expect(() => assertIsClass(A, 'false')).toThrowError("Expected class A but got 'false'.");
        expect(() => assertIsClass(A, 0)).toThrowError('Expected class A but got 0.');
        expect(() => assertIsClass(A, {})).toThrowError('Expected class A but got {}.');
        expect(() => assertIsClass(A, { x: 123 })).toThrowError(
          'Expected class A but got {"x":123}.',
        );
        expect(() => assertIsClass(A, assertIsNumber)).toThrowError(
          'Expected class A but got Function.',
        );
        expect(() => assertIsClass(A, [1, 2, 3])).toThrowError('Expected class A but got [1,2,3].');
        expect(() => assertIsClass(A, new B())).toThrowError('Expected class A but got class B.');
      });
    });
    describe('Used in array', () => {
      const aa: (A | B)[] = [new A(), new AA(1)];
      // aa[0].a(); // expect a compiler error
      it('should assert values', () => {
        const b = aa.map(v => {
          assertIsClass(A, v);
          return v;
        });
        expect(b).toStrictEqual([new A(), new AA(1)]);
        expect(b[0].a()).toBe(1);
      });
    });
  });
  describe('For subclass', () => {
    describe('Given valid value', () => {
      // a.y.aa(); // expect a compiler error
      it('should pass', () => {
        assertIsClass(AA, a.y);
        expect(a.y.aa()).toBe(2);
      });
    });
    describe('Given invalid value', () => {
      it('should throw error', () => {
        expect(() => assertIsClass(AA, null)).toThrowError('Expected class AA but got null.');
        expect(() => assertIsClass(AA, undefined)).toThrowError(
          'Expected class AA but got undefined.',
        );
        expect(() => assertIsClass(AA, false)).toThrowError('Expected class AA but got false.');
        expect(() => assertIsClass(AA, 'false')).toThrowError("Expected class AA but got 'false'.");
        expect(() => assertIsClass(AA, 0)).toThrowError('Expected class AA but got 0.');
        expect(() => assertIsClass(AA, {})).toThrowError('Expected class AA but got {}.');
        expect(() => assertIsClass(AA, { x: 123 })).toThrowError(
          'Expected class AA but got {"x":123}.',
        );
        expect(() => assertIsClass(AA, assertIsNumber)).toThrowError(
          'Expected class AA but got Function.',
        );
        expect(() => assertIsClass(AA, [1, 2, 3])).toThrowError(
          'Expected class AA but got [1,2,3].',
        );
        expect(() => assertIsClass(AA, new A())).toThrowError('Expected class AA but got class A.');
        expect(() => assertIsClass(AA, new B())).toThrowError('Expected class AA but got class B.');
      });
    });
    describe('Used in array', () => {
      const aa: (AA | B)[] = [new AA(1)];
      // aa[0].aa(); // expect a compiler error
      it('should assert values', () => {
        const b = aa.map(v => {
          assertIsClass(AA, v);
          return v;
        });
        expect(b).toStrictEqual([new AA(1)]);
        expect(b[0].aa()).toBe(2);
      });
    });
  });
});
