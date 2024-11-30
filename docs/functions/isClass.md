[**APIs Documentation**](../README.md)

***

# Function: isClass()

> **isClass**\<`T`\>(`Class`): (`value`) => `value is InstanceType<T>`

Returns a function to check if a value is instance of a class.

## Type Parameters

• **T** *extends* (...`args`) => `unknown`

## Parameters

### Class

`T`

The constructor of a class

## Returns

`Function`

A function

### Parameters

#### value

`any`

### Returns

`value is InstanceType<T>`

## Example

```ts
 class A {};
 class B {};
 const a = [new A(), 1, new B()]; // a is (number | A | B)[]
 const b = a.filter(isClass(A));  // b is [new A()], i.e. A[]
```

## Defined in

[index.ts:136](https://github.com/daidodo/condition/blob/b31130d86c9a53501789e496fa7e9513e735b40b/src/index.ts#L136)
