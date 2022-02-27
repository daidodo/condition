export function assertTrue(
  condition: boolean,
  message?: string,
  props?: object,
): asserts condition {
  if (!condition) throwError(message ?? `Expected true but got ${condition}`, props);
}

export function isNonNull<T>(value: T): value is NonNullable<T> {
  return value !== undefined && value !== null;
}

export function assertNonNull<T>(
  value: T,
  message?: string,
  props?: object,
): asserts value is NonNullable<T> {
  if (!isNonNull(value)) throwError(message ?? `Expected non-null value but got ${value}`, props);
}

export const isNumber = isType<number>('number');
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
