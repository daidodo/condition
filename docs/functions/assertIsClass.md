[**APIs Documentation**](../README.md)

***

# Function: assertIsClass()

> **assertIsClass**\<`T`\>(`Class`, `value`, `message`?, `props`?): `asserts value is InstanceType<T>`

Check if a value is instance of a class, or throw an error with custom message.

## Type Parameters

• **T** *extends* (...`args`) => `unknown`

## Parameters

### Class

`T`

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

`asserts value is InstanceType<T>`

## Example

```ts
 class A {
   a() {}
 }

 function f(v: A | string) {
   // v.a(); // expect a compiler error
   assertIsClass(A, v);
   v.a(); // OK, v is class A
 }
```

## Defined in

[index.ts:253](https://github.com/daidodo/condition/blob/b31130d86c9a53501789e496fa7e9513e735b40b/src/index.ts#L253)
