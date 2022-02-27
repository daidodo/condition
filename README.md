# Condition

[![npm](https://img.shields.io/npm/v/@dozerg/condition.svg)](https://www.npmjs.com/package/@dozerg/condition) ![Downloads](https://img.shields.io/npm/dm/@dozerg/condition.svg)

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

## [API Document](docs/README.md)

## License

MIT © Zhao DAI <daidodo@gmail.com>
