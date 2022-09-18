# Condition

[![npm](https://img.shields.io/npm/v/@dozerg/condition.svg)](https://www.npmjs.com/package/@dozerg/condition) ![Downloads](https://img.shields.io/npm/dm/@dozerg/condition.svg)
[![Build Status](https://github.com/daidodo/condition/actions/workflows/node.js.yml/badge.svg)](https://github.com/daidodo/condition/actions)

Utilities for preconditions and assertions for TypeScript and JavaScript.

## Install

```sh
npm i @dozerg/condition
```

## Usage

```ts
import { isNonNull, assertNonNull } from '@dozerg/condition';

function foo(p?: string) {
  assertNonNull(p);
  p.length; // OK, p is string
  // ...

  const a = [1, undefined, 2];   // a is (number | undefined)[]
  const b = a.filter(isNonNull); // b is [1, 2], i.e. number[]
  // ...
}
```

## APIs

- [assertIsBigint](docs/README.md#assertisbigint)
- [assertIsBoolean](docs/README.md#assertisboolean)
- [assertIsClass](docs/README.md#assertisclass)
- [assertIsNumber](docs/README.md#assertisnumber)
- [assertIsString](docs/README.md#assertisstring)
- [assertNonNull](docs/README.md#assertnonnull)
- [assertTrue](docs/README.md#asserttrue)
- [assertIsObject](docs/README.md#assertisobject)
- [isBigint](docs/README.md#isbigint)
- [isBoolean](docs/README.md#isboolean)
- [isClass](docs/README.md#isclass)
- [isNonNull](docs/README.md#isnonnull)
- [isNumber](docs/README.md#isnumber)
- [isString](docs/README.md#isstring)
- [isObject](docs/README.md#isobject)

## License

MIT © Zhao DAI <daidodo@gmail.com>
