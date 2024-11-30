[**APIs Documentation**](../README.md)

***

# Function: isNonNull()

> **isNonNull**\<`T`\>(`value`): `value is NonNullable<T>`

Check if a value is neither `null` nor `undefined`.

## Type Parameters

• **T**

## Parameters

### value

`T`

The value to be checked

## Returns

`value is NonNullable<T>`

false if the value is `null` or `undefined`, or true otherwise

## Example

```ts
 const a = [1, undefined, 2];   // a is (number | undefined)[]
 const b = a.filter(isNonNull); // b is number[]
```

## Defined in

[index.ts:35](https://github.com/daidodo/condition/blob/b31130d86c9a53501789e496fa7e9513e735b40b/src/index.ts#L35)
