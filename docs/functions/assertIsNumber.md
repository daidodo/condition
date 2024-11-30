[**APIs Documentation**](../README.md)

***

# Function: assertIsNumber()

> **assertIsNumber**(`value`, `message`?, `props`?): `asserts value is number`

Check if a value is number, or throw an error with custom message.

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

`asserts value is number`

## Example

```ts
 function f(v: boolean | number) {
   //v + 1; // expect a compiler error
   assertIsNumber(v);
   v + 1; // OK, v is number
 }
```

## Defined in

[index.ts:166](https://github.com/daidodo/condition/blob/b31130d86c9a53501789e496fa7e9513e735b40b/src/index.ts#L166)
