[**APIs Documentation**](../README.md)

***

# Function: isBoolean()

> **isBoolean**(`value`): `value is boolean`

Check if a value is boolean.

## Parameters

### value

`any`

The value to be checked

## Returns

`value is boolean`

true if the value is boolean, or false otherwise

## Example

```ts
 const a = ['1', true, '3', false]; // a is (string | boolean)[]
 const b = a.filter(isBoolean);      // b is [true, false], i.e. boolean[]
```

## Defined in

[index.ts:99](https://github.com/daidodo/condition/blob/b31130d86c9a53501789e496fa7e9513e735b40b/src/index.ts#L99)
