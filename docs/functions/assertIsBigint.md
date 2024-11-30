[**APIs Documentation**](../README.md)

***

# Function: assertIsBigint()

> **assertIsBigint**(`value`, `message`?, `props`?): `asserts value is bigint`

Check if a value is bigint, or throw an error with custom message.

## Parameters

### value

`any`

The value to be checked

### message?

`string`

Error message, or absent for default message

### props?

`object`

Extra properties to be added to error message

## Returns

`asserts value is bigint`

## Example

```ts
 function f(v: bigint) {}

 function g(v: bigint | string) {
   // f(v); // expect a compiler error
   assertIsBigint(v);
   f(v); // OK, v is bigint
 }
```

## Defined in

[index.ts:221](https://github.com/daidodo/condition/blob/b31130d86c9a53501789e496fa7e9513e735b40b/src/index.ts#L221)
