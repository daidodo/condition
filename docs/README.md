# APIs Documentation

## Table of contents

### Functions

- [assertIsBigint](README.md#assertisbigint)
- [assertIsBoolean](README.md#assertisboolean)
- [assertIsClass](README.md#assertisclass)
- [assertIsNumber](README.md#assertisnumber)
- [assertIsObject](README.md#assertisobject)
- [assertIsString](README.md#assertisstring)
- [assertNonNull](README.md#assertnonnull)
- [assertTrue](README.md#asserttrue)
- [isBigint](README.md#isbigint)
- [isBoolean](README.md#isboolean)
- [isClass](README.md#isclass)
- [isNonNull](README.md#isnonnull)
- [isNumber](README.md#isnumber)
- [isObject](README.md#isobject)
- [isString](README.md#isstring)

## Functions

### assertIsBigint

▸ **assertIsBigint**(`value`, `message?`, `props?`): asserts value is bigint

Check if a value is bigint, or throw an error with custom message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | The value to be checked |
| `message?` | `string` | Error message, or absent for default message |
| `props?` | `object` | Extra properties to be added to error message |

#### Returns

asserts value is bigint

**`Example`**

```ts
 function f(v: bigint) {}

 function g(v: bigint | string) {
   // f(v); // expect a compiler error
   assertIsBigint(v);
   f(v); // OK, v is bigint
 }
```

#### Defined in

[index.ts:272](https://github.com/daidodo/condition/blob/02143a5/src/index.ts#L272)

___

### assertIsBoolean

▸ **assertIsBoolean**(`value`, `message?`, `props?`): asserts value is boolean

Check if a value is boolean, or throw an error with custom message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | The value to be checked |
| `message?` | `string` | Error message, or absent for default message |
| `props?` | `object` | Extra properties to be added to error message |

#### Returns

asserts value is boolean

**`Example`**

```ts
 function f(v: A) {}

 function g(v: boolean | string) {
   // f(v); // expect a compiler error
   assertIsBoolean(v);
   f(v); // OK, v is boolean
 }
```

#### Defined in

[index.ts:272](https://github.com/daidodo/condition/blob/02143a5/src/index.ts#L272)

___

### assertIsClass

▸ **assertIsClass**<`T`\>(`Class`, `value`, `message?`, `props?`): asserts value is InstanceType<T\>

Check if a value is instance of a class, or throw an error with custom message.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`[]) => `unknown` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Class` | `T` | - |
| `value` | `any` | The value to be checked |
| `message?` | `string` | Error message, or absent for default message |
| `props?` | `object` | Extra properties to be added to error message |

#### Returns

asserts value is InstanceType<T\>

**`Example`**

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

#### Defined in

[index.ts:253](https://github.com/daidodo/condition/blob/02143a5/src/index.ts#L253)

___

### assertIsNumber

▸ **assertIsNumber**(`value`, `message?`, `props?`): asserts value is number

Check if a value is number, or throw an error with custom message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | The value to be checked |
| `message?` | `string` | Error message, or absent for default message |
| `props?` | `object` | Extra properties to be added to error message |

#### Returns

asserts value is number

**`Example`**

```ts
 function f(v: boolean | number) {
   //v + 1; // expect a compiler error
   assertIsNumber(v);
   v + 1; // OK, v is number
 }
```

#### Defined in

[index.ts:272](https://github.com/daidodo/condition/blob/02143a5/src/index.ts#L272)

___

### assertIsObject

▸ **assertIsObject**(`value`, `message?`, `props?`): `void`

Check if a value is an object, or throw an error with custom message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | The value to be checked |
| `message?` | `string` | Error message, or absent for default message |
| `props?` | `object` | Extra properties to be added to error message |

#### Returns

`void`

#### Defined in

[index.ts:230](https://github.com/daidodo/condition/blob/02143a5/src/index.ts#L230)

___

### assertIsString

▸ **assertIsString**(`value`, `message?`, `props?`): asserts value is string

Check if a value is string, or throw an error with custom message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | The value to be checked |
| `message?` | `string` | Error message, or absent for default message |
| `props?` | `object` | Extra properties to be added to error message |

#### Returns

asserts value is string

**`Example`**

```ts
 function f(v: boolean | string) {
   //v.length; // expect a compiler error
   assertIsString(v);
   v.length; // OK, v is string
 }
```

#### Defined in

[index.ts:272](https://github.com/daidodo/condition/blob/02143a5/src/index.ts#L272)

___

### assertNonNull

▸ **assertNonNull**<`T`\>(`value`, `message?`, `props?`): asserts value is NonNullable<T\>

Check if a value is neither `null` nor `undefined`, or throw an error with custom message.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | The value to be checked |
| `message?` | `string` | Error message, or absent for default message |
| `props?` | `object` | Extra properties to be added to error message |

#### Returns

asserts value is NonNullable<T\>

**`Example`**

```ts
 function f(v?: string) {
   //v.length; // expect a compiler error
   assertIsNonNull(v);
   v.length; // OK, v is string
 }
```

#### Defined in

[index.ts:54](https://github.com/daidodo/condition/blob/02143a5/src/index.ts#L54)

___

### assertTrue

▸ **assertTrue**(`condition`, `message?`, `props?`): asserts condition

Check if a condition is true, or throw an error with custom message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `condition` | `boolean` | The condition to be checked |
| `message?` | `string` | Error message, or absent for default message |
| `props?` | `object` | Extra properties to be added to error message |

#### Returns

asserts condition

**`Example`**

```ts
 const a: unknown = 'abc';
 // a.length; // expect a compiler error

 assertTrue(typeof a === 'string');
 a.length; // OK, a is string
```

#### Defined in

[index.ts:16](https://github.com/daidodo/condition/blob/02143a5/src/index.ts#L16)

___

### isBigint

▸ **isBigint**(`value`): value is bigint

Check if a value is bigint.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | The value to be checked |

#### Returns

value is bigint

true if the value is bigint, or false otherwise

**`Example`**

```ts
 const a = [1, BigInt(2), 3, BigInt(4)]; // a is (number | bigint)[]
 const b = a.filter(isBigint);           // b is [BigInt(2), BigInt(3)], i.e. bigint[]
```

#### Defined in

[index.ts:266](https://github.com/daidodo/condition/blob/02143a5/src/index.ts#L266)

___

### isBoolean

▸ **isBoolean**(`value`): value is boolean

Check if a value is boolean.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | The value to be checked |

#### Returns

value is boolean

true if the value is boolean, or false otherwise

**`Example`**

```ts
 const a = ['1', true, '3', false]; // a is (string | boolean)[]
 const b = a.filter(isBoolean);      // b is [true, false], i.e. boolean[]
```

#### Defined in

[index.ts:266](https://github.com/daidodo/condition/blob/02143a5/src/index.ts#L266)

___

### isClass

▸ **isClass**<`T`\>(`Class`): (`value`: `any`) => value is InstanceType<T\>

Returns a function to check if a value is instance of a class.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`[]) => `unknown` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Class` | `T` | The constructor of a class |

#### Returns

`fn`

A function

▸ (`value`): value is InstanceType<T\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

##### Returns

value is InstanceType<T\>

**`Example`**

```ts
 class A {};
 class B {};
 const a = [new A(), 1, new B()]; // a is (number | A | B)[]
 const b = a.filter(isClass(A));  // b is [new A()], i.e. A[]
```

#### Defined in

[index.ts:136](https://github.com/daidodo/condition/blob/02143a5/src/index.ts#L136)

___

### isNonNull

▸ **isNonNull**<`T`\>(`value`): value is NonNullable<T\>

Check if a value is neither `null` nor `undefined`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | The value to be checked |

#### Returns

value is NonNullable<T\>

false if the value is `null` or `undefined`, or true otherwise

**`Example`**

```ts
 const a = [1, undefined, 2];   // a is (number | undefined)[]
 const b = a.filter(isNonNull); // b is number[]
```

#### Defined in

[index.ts:35](https://github.com/daidodo/condition/blob/02143a5/src/index.ts#L35)

___

### isNumber

▸ **isNumber**(`value`): value is number

Check if a value is number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | The value to be checked |

#### Returns

value is number

true if the value is number, or false otherwise

**`Example`**

```ts
 const a = ['1', 2, '3', 4];   // a is (string | number)[]
 const b = a.filter(isNumber); // b is [2, 4], i.e. number[]
```

#### Defined in

[index.ts:266](https://github.com/daidodo/condition/blob/02143a5/src/index.ts#L266)

___

### isObject

▸ **isObject**(`v`): `boolean`

Check if a value is an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `any` | The value to be checked |

#### Returns

`boolean`

true if the value is an object, or false otherwise

#### Defined in

[index.ts:119](https://github.com/daidodo/condition/blob/02143a5/src/index.ts#L119)

___

### isString

▸ **isString**(`value`): value is string

Check if a value is string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | The value to be checked |

#### Returns

value is string

true if the value is string, or false otherwise

**`Example`**

```ts
 const a = ['1', 2, '3', 4];   // a is (string | number)[]
 const b = a.filter(isString); // b is ['1', '3'], i.e. string[]
```

#### Defined in

[index.ts:266](https://github.com/daidodo/condition/blob/02143a5/src/index.ts#L266)
