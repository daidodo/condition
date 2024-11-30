[**APIs Documentation**](../README.md)

***

# Function: assertTrue()

> **assertTrue**(`condition`, `message`?, `props`?): `asserts condition`

Check if a condition is true, or throw an error with custom message.

## Parameters

### condition

`boolean`

The condition to be checked

### message?

`string`

Error message, or absent for default message

### props?

`object`

Extra properties to be added to error message

## Returns

`asserts condition`

## Example

```ts
 const a: unknown = 'abc';
 // a.length; // expect a compiler error

 assertTrue(typeof a === 'string');
 a.length; // OK, a is string
```

## Defined in

[index.ts:16](https://github.com/daidodo/condition/blob/b31130d86c9a53501789e496fa7e9513e735b40b/src/index.ts#L16)
