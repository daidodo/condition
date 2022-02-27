/**
 * Check if a condition is true, or throw an error with custom message.
 * @example
 * ```
 *  const a: unknown = 'abc';
 *  // a.length; // expect a compiler error
 *
 *  assertTrue(typeof a === 'string');
 *  a.length; // OK, a is string
 * ```
 *
 * @param condition The condition to be checked
 * @param message Error message, or absent for default message
 * @param props Extra properties to be added to error message
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
 * ```
 *  const a = [1, undefined, 2];   // a is (number | undefined)[]
 *  const b = a.filter(isNonNull); // b is number[]
 * ```
 *
 * @param value The value to be checked
 * @returns false if the value is `null` or `undefined`, or true otherwise
 */
export function isNonNull<T>(value: T): value is NonNullable<T> {
  return value !== undefined && value !== null;
}

/**
 * Check if a value is neither `null` nor `undefined`, or throw an error with custom message.
 * @example
 * ```
 *  function f(v?: string) {
 *    //v.length; // expect a compiler error
 *    assertIsNonNull(v);
 *    v.length; // OK, v is string
 *  }
 * ```
 *
 * @param value The value to be checked
 * @param message Error message, or absent for default message
 * @param props Extra properties to be added to error message
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
 * ```
 *  const a = ['1', 2, '3', 4];   // a is (string | number)[]
 *  const b = a.filter(isNumber); // b is [2, 4], i.e. number[]
 * ```
 *
 * @param value The value to be checked
 * @returns true if the value is number, or false otherwise
 */
export const isNumber = isType<number>('number');

/**
 * Check if a value is string.
 * @example
 * ```
 *  const a = ['1', 2, '3', 4];   // a is (string | number)[]
 *  const b = a.filter(isString); // b is ['1', '3'], i.e. string[]
 * ```
 *
 * @param value The value to be checked
 * @returns true if the value is string, or false otherwise
 */
export const isString = isType<string>('string');
export const isBoolean = isType<boolean>('boolean');
export const isBigint = isType<bigint>('bigint');

export function isClass<T extends { new (...args: any[]): unknown }>(Class: T) {
  return (value: any): value is InstanceType<T> => {
    return value instanceof Class;
  };
}

const _assertIsNumber = assertIsType<number>(isNumber, v => `Expected a number but got ${desc(v)}`);
const _assertIsString = assertIsType<string>(isString, v => `Expected a string but got ${desc(v)}`);
const _assertIsBoolean = assertIsType<boolean>(
  isBoolean,
  v => `Expected a boolean but got ${desc(v)}`,
);
const _assertIsBigint = assertIsType<bigint>(isBigint, v => `Expected a bigint but got ${desc(v)}`);

// https://github.com/microsoft/TypeScript/issues/41047#issuecomment-706752079
export const assertIsNumber: typeof _assertIsNumber = _assertIsNumber;
export const assertIsString: typeof _assertIsString = _assertIsString;
export const assertIsBoolean: typeof _assertIsBoolean = _assertIsBoolean;
export const assertIsBigint: typeof _assertIsBigint = _assertIsBigint;

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
