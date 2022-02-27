export function assertTrue(
  condition: boolean,
  message?: string,
  props?: object,
): asserts condition {
  if (!condition) throwError(message ?? `Expected true but got ${condition}`, props);
}

export function assertFalse(
  condition: boolean,
  message?: string,
  props?: object,
): asserts condition is false {
  if (!!condition) throwError(message ?? `Expected false but got ${condition}`, props);
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

// https://github.com/microsoft/TypeScript/issues/41047#issuecomment-706752079
const _assertIsNumber = assertIsType<number>(
  isNumber,
  v => `Expected a number but got ${typeof v}: ${v}`,
);
const _assertIsString = assertIsType<string>(
  isNumber,
  v => `Expected a string but got ${typeof v}: ${v}`,
);

export const assertIsNumber: typeof _assertIsNumber = _assertIsNumber;
export const assertIsString: typeof _assertIsString = _assertIsString;

type TypeName = 'number' | 'string' | 'boolean' | 'function' | 'bigint' | 'object';

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
