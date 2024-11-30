[**APIs Documentation**](../README.md)

***

# Function: isString()

> **isString**(`value`): `value is string`

Check if a value is string.

## Parameters

### value

`any`

The value to be checked

## Returns

`value is string`

true if the value is string, or false otherwise

## Example

```ts
 const a = ['1', 2, '3', 4];   // a is (string | number)[]
 const b = a.filter(isString); // b is ['1', '3'], i.e. string[]
```

## Defined in

[index.ts:86](https://github.com/daidodo/condition/blob/b31130d86c9a53501789e496fa7e9513e735b40b/src/index.ts#L86)
