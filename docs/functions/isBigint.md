[**APIs Documentation**](../README.md)

***

# Function: isBigint()

> **isBigint**(`value`): `value is bigint`

Check if a value is bigint.

## Parameters

### value

`any`

The value to be checked

## Returns

`value is bigint`

true if the value is bigint, or false otherwise

## Example

```ts
 const a = [1, BigInt(2), 3, BigInt(4)]; // a is (number | bigint)[]
 const b = a.filter(isBigint);           // b is [BigInt(2), BigInt(3)], i.e. bigint[]
```

## Defined in

[index.ts:112](https://github.com/daidodo/condition/blob/b31130d86c9a53501789e496fa7e9513e735b40b/src/index.ts#L112)
