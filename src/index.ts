/**
 * Check if a condition is true, or throw an error with custom message.
 * @example
 * ```ts
 *  const a: unknown = 'abc';
 *  // a.length; // expect a compiler error
 *
 *  assertTrue(typeof a === 'string');
 *  a.length; // OK, a is string
 * ```
 *
 * @param condition - The condition to be checked
 * @param message - Error message, or absent for default message
 * @param props - Extra properties to be added to error message
 */
export function assertTrue(
  condition: boolean,
  message?: string,
  props?: object,
): asserts condition {
  if (!condition) throwError(message ?? `Expected true but got ${condition}`, props);
}

/**
 * Check if a value is neither `null` nor `undefined`.
 * @example
 * ```ts
 *  const a = [1, undefined, 2];   // a is (number | undefined)[]
 *  const b = a.filter(isNonNull); // b is number[]
 * ```
 *
 * @param value - The value to be checked
 * @returns false if the value is `null` or `undefined`, or true otherwise
 */
export function isNonNull<T>(value: T): value is NonNullable<T> {
  return value !== undefined && value !== null;
}

/**
 * Check if a value is neither `null` nor `undefined`, or throw an error with custom message.
 * @example
 * ```ts
 *  function f(v?: string) {
 *    //v.length; // expect a compiler error
 *    assertIsNonNull(v);
 *    v.length; // OK, v is string
 *  }
 * ```
 *
 * @param value - The value to be checked
 * @param message - Error message, or absent for default message
 * @param props - Extra properties to be added to error message
 */
export function assertNonNull<T>(
  value: T,
  message?: string,
  props?: object,
): asserts value is NonNullable<T> {
  if (!isNonNull(value)) throwError(message ?? `Expected non-null value but got ${value}`, props);
}

/**
 * Check if a value is number.
 * @example
 * ```ts
 *  const a = ['1', 2, '3', 4];   // a is (string | number)[]
 *  const b = a.filter(isNumber); // b is [2, 4], i.e. number[]
 * ```
 *
 * @param value - The value to be checked
 * @returns true if the value is number, or false otherwise
 */
export const isNumber = isType<number>('number');

/**
 * Check if a value is string.
 * @example
 * ```ts
 *  const a = ['1', 2, '3', 4];   // a is (string | number)[]
 *  const b = a.filter(isString); // b is ['1', '3'], i.e. string[]
 * ```
 *
 * @param value - The value to be checked
 * @returns true if the value is string, or false otherwise
 */
export const isString = isType<string>('string');

/**
 * Check if a value is boolean.
 * @example
 * ```ts
 *  const a = ['1', true, '3', false]; // a is (string | boolean)[]
 *  const b = a.filter(isBoolean);      // b is [true, false], i.e. boolean[]
 * ```
 *
 * @param value - The value to be checked
 * @returns true if the value is boolean, or false otherwise
 */
export const isBoolean = isType<boolean>('boolean');

/**
 * Check if a value is bigint.
 * @example
 * ```ts
 *  const a = [1, BigInt(2), 3, BigInt(4)]; // a is (number | bigint)[]
 *  const b = a.filter(isBigint);           // b is [BigInt(2), BigInt(3)], i.e. bigint[]
 * ```
 *
 * @param value - The value to be checked
 * @returns true if the value is bigint, or false otherwise
 */
export const isBigint = isType<bigint>('bigint');

/**
 * Check if a value is an object.
 * @param v - The value to be checked
 * @returns true if the value is an object, or false otherwise
 */
export function isObject(v: any) {
  return typeof v === 'object' && !Array.isArray(v) && v !== null;
}

/**
 * Returns a function to check if a value is instance of a class.
 * @example
 * ```ts
 *  class A {};
 *  class B {};
 *  const a = [new A(), 1, new B()]; // a is (number | A | B)[]
 *  const b = a.filter(isClass(A));  // b is [new A()], i.e. A[]
 * ```
 *
 * @param Class - The constructor of a class
 * @returns A function
 */
export function isClass<T extends { new (...args: any[]): unknown }>(Class: T) {
  return (value: any): value is InstanceType<T> => {
    return value instanceof Class;
  };
}

// https://github.com/microsoft/TypeScript/issues/41047#issuecomment-706752079
const _assertIsNumber = assertIsType<number>(isNumber, v => `Expected a number but got ${desc(v)}`);
const _assertIsString = assertIsType<string>(isString, v => `Expected a string but got ${desc(v)}`);
const _assertIsBoolean = assertIsType<boolean>(
  isBoolean,
  v => `Expected a boolean but got ${desc(v)}`,
);
const _assertIsBigint = assertIsType<bigint>(isBigint, v => `Expected a bigint but got ${desc(v)}`);

/**
 * Check if a value is number, or throw an error with custom message.
 * @example
 * ```ts
 *  function f(v: boolean | number) {
 *    //v + 1; // expect a compiler error
 *    assertIsNumber(v);
 *    v + 1; // OK, v is number
 *  }
 * ```
 *
 * @param value - The value to be checked
 * @param message - Error message, or absent for default message
 * @param props - Extra properties to be added to error message
 */
export const assertIsNumber: typeof _assertIsNumber = _assertIsNumber;

/**
 * Check if a value is string, or throw an error with custom message.
 * @example
 * ```ts
 *  function f(v: boolean | string) {
 *    //v.length; // expect a compiler error
 *    assertIsString(v);
 *    v.length; // OK, v is string
 *  }
 * ```
 *
 * @param value - The value to be checked
 * @param message - Error message, or absent for default message
 * @param props - Extra properties to be added to error message
 */
export const assertIsString: typeof _assertIsString = _assertIsString;

/**
 * Check if a value is boolean, or throw an error with custom message.
 * @example
 * ```ts
 *  function f(v: A) {}
 *
 *  function g(v: boolean | string) {
 *    // f(v); // expect a compiler error
 *    assertIsBoolean(v);
 *    f(v); // OK, v is boolean
 *  }
 * ```
 *
 * @param value - The value to be checked
 * @param message - Error message, or absent for default message
 * @param props - Extra properties to be added to error message
 */
export const assertIsBoolean: typeof _assertIsBoolean = _assertIsBoolean;

/**
 * Check if a value is bigint, or throw an error with custom message.
 * @example
 * ```ts
 *  function f(v: bigint) {}
 *
 *  function g(v: bigint | string) {
 *    // f(v); // expect a compiler error
 *    assertIsBigint(v);
 *    f(v); // OK, v is bigint
 *  }
 * ```
 *
 * @param value - The value to be checked
 * @param message - Error message, or absent for default message
 * @param props - Extra properties to be added to error message
 */
export const assertIsBigint: typeof _assertIsBigint = _assertIsBigint;

/**
 * Check if a value is an object, or throw an error with custom message.
 *
 * @param value - The value to be checked
 * @param message - Error message, or absent for default message
 * @param props - Extra properties to be added to error message
 */
export function assertIsObject(value: any, message?: string, props?: object) {
  if (!isObject(value)) throwError(message ?? `Expect an object but got ${desc(value)}`, props);
}

/**
 * Check if a value is instance of a class, or throw an error with custom message.
 * @example
 * ```ts
 *  class A {
 *    a() {}
 *  }
 *
 *  function f(v: A | string) {
 *    // v.a(); // expect a compiler error
 *    assertIsClass(A, v);
 *    v.a(); // OK, v is class A
 *  }
 * ```
 *
 * @param value - The value to be checked
 * @param message - Error message, or absent for default message
 * @param props - Extra properties to be added to error message
 */
export function assertIsClass<T extends { new (...args: any[]): unknown }>(
  Class: T,
  value: any,
  message?: string,
  props?: object,
): asserts value is InstanceType<T> {
  if (!isClass(Class)(value))
    throwError(message ?? `Expected class ${Class.name} but got ${desc(value)}`, props);
}

type TypeName = 'number' | 'string' | 'boolean' | 'bigint' | 'undefined';

function isType<T>(name: TypeName) {
  return (value: any): value is T => {
    return typeof value === name;
  };
}

function assertIsType<T>(check: (v: any) => boolean, defaultMsg: (v: any) => string) {
  return (value: any, message?: string, props?: object): asserts value is T => {
    if (!check(value)) throwError(message ?? defaultMsg(value), props);
  };
}

function throwError(msg: string, props?: object) {
  const pmsg = props ? `, props = ${JSON.stringify(props)}` : '';
  throw Error(msg + pmsg + '.');
}

function desc(v: any) {
  switch (typeof v) {
    case 'string':
      return `'${v}'`;
    case 'object':
      if (v === null) return 'null';
      else if (Array.isArray(v)) return JSON.stringify(v);
      else {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        const { name } = v.constructor;
        if (name === 'Object') return JSON.stringify(v);
        return `class ${name}`;
      }
    case 'function':
      return 'Function';
    default:
      return `${v}`;
  }
}
