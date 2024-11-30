[**APIs Documentation**](../README.md)

***

# Function: isNumber()

> **isNumber**(`value`): `value is number`

Check if a value is number.

## Parameters

### value

`any`

The value to be checked

## Returns

`value is number`

true if the value is number, or false otherwise

## Example

```ts
 const a = ['1', 2, '3', 4];   // a is (string | number)[]
 const b = a.filter(isNumber); // b is [2, 4], i.e. number[]
```

## Defined in

[index.ts:73](https://github.com/daidodo/condition/blob/b31130d86c9a53501789e496fa7e9513e735b40b/src/index.ts#L73)
