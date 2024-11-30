[**APIs Documentation**](../README.md)

***

# Function: assertNonNull()

> **assertNonNull**\<`T`\>(`value`, `message`?, `props`?): `asserts value is NonNullable<T>`

Check if a value is neither `null` nor `undefined`, or throw an error with custom message.

## Type Parameters

• **T**

## Parameters

### value

`T`

The value to be checked

### message?

`string`

Error message, or absent for default message

### props?

`object`

Extra properties to be added to error message

## Returns

`asserts value is NonNullable<T>`

## Example

```ts
 function f(v?: string) {
   //v.length; // expect a compiler error
   assertIsNonNull(v);
   v.length; // OK, v is string
 }
```

## Defined in

[index.ts:54](https://github.com/daidodo/condition/blob/b31130d86c9a53501789e496fa7e9513e735b40b/src/index.ts#L54)
