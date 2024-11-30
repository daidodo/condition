[**APIs Documentation**](../README.md)

***

# Function: assertIsString()

> **assertIsString**(`value`, `message`?, `props`?): `asserts value is string`

Check if a value is string, or throw an error with custom message.

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

`asserts value is string`

## Example

```ts
 function f(v: boolean | string) {
   //v.length; // expect a compiler error
   assertIsString(v);
   v.length; // OK, v is string
 }
```

## Defined in

[index.ts:183](https://github.com/daidodo/condition/blob/b31130d86c9a53501789e496fa7e9513e735b40b/src/index.ts#L183)
