[**APIs Documentation**](../README.md)

***

# Function: assertIsBoolean()

> **assertIsBoolean**(`value`, `message`?, `props`?): `asserts value is boolean`

Check if a value is boolean, or throw an error with custom message.

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

`asserts value is boolean`

## Example

```ts
 function f(v: A) {}

 function g(v: boolean | string) {
   // f(v); // expect a compiler error
   assertIsBoolean(v);
   f(v); // OK, v is boolean
 }
```

## Defined in

[index.ts:202](https://github.com/daidodo/condition/blob/b31130d86c9a53501789e496fa7e9513e735b40b/src/index.ts#L202)
