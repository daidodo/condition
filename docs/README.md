# APIs Documentation

## Table of contents

### Functions

- [assertIsBigint](README.md#assertisbigint)
- [assertIsBoolean](README.md#assertisboolean)
- [assertIsClass](README.md#assertisclass)
- [assertIsNumber](README.md#assertisnumber)
- [assertIsString](README.md#assertisstring)
- [assertNonNull](README.md#assertnonnull)
- [assertTrue](README.md#asserttrue)
- [isBigint](README.md#isbigint)
- [isBoolean](README.md#isboolean)
- [isClass](README.md#isclass)
- [isNonNull](README.md#isnonnull)
- [isNumber](README.md#isnumber)
- [isString](README.md#isstring)

## Functions

### assertIsBigint

▸ **assertIsBigint**(`value`, `message?`, `props?`): asserts value is bigint

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `message?` | `string` |
| `props?` | `object` |

#### Returns

asserts value is bigint

#### Defined in

[index.ts:108](https://github.com/daidodo/prereq/blob/9fb1604/src/index.ts#L108)

___

### assertIsBoolean

▸ **assertIsBoolean**(`value`, `message?`, `props?`): asserts value is boolean

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `message?` | `string` |
| `props?` | `object` |

#### Returns

asserts value is boolean

#### Defined in

[index.ts:107](https://github.com/daidodo/prereq/blob/9fb1604/src/index.ts#L107)

___

### assertIsClass

▸ **assertIsClass**<`T`\>(`Class`, `value`, `message?`, `props?`): asserts value is InstanceType<T\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`[]) => `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `Class` | `T` |
| `value` | `any` |
| `message?` | `string` |
| `props?` | `object` |

#### Returns

asserts value is InstanceType<T\>

#### Defined in

[index.ts:110](https://github.com/daidodo/prereq/blob/9fb1604/src/index.ts#L110)

___

### assertIsNumber

▸ **assertIsNumber**(`value`, `message?`, `props?`): asserts value is number

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `message?` | `string` |
| `props?` | `object` |

#### Returns

asserts value is number

#### Defined in

[index.ts:105](https://github.com/daidodo/prereq/blob/9fb1604/src/index.ts#L105)

___

### assertIsString

▸ **assertIsString**(`value`, `message?`, `props?`): asserts value is string

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `message?` | `string` |
| `props?` | `object` |

#### Returns

asserts value is string

#### Defined in

[index.ts:106](https://github.com/daidodo/prereq/blob/9fb1604/src/index.ts#L106)

___

### assertNonNull

▸ **assertNonNull**<`T`\>(`value`, `message?`, `props?`): asserts value is NonNullable<T\>

Check if a value is neither `null` nor `undefined`, or throw an error with custom message.

**`example`**
```
 function f(v?: string) {
   //v.length; // expect a compiler error
   assertIsNonNull(v);
   v.length; // OK, v is string
 }
```

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

#### Defined in

[index.ts:54](https://github.com/daidodo/prereq/blob/9fb1604/src/index.ts#L54)

___

### assertTrue

▸ **assertTrue**(`condition`, `message?`, `props?`): asserts condition

Check if a condition is true, or throw an error with custom message.

**`example`**
```
 const a: unknown = 'abc';
 // a.length; // expect a compiler error

 assertTrue(typeof a === 'string');
 a.length; // OK, a is string
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `condition` | `boolean` | The condition to be checked |
| `message?` | `string` | Error message, or absent for default message |
| `props?` | `object` | Extra properties to be added to error message |

#### Returns

asserts condition

#### Defined in

[index.ts:16](https://github.com/daidodo/prereq/blob/9fb1604/src/index.ts#L16)

___

### isBigint

▸ **isBigint**(`value`): value is bigint

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is bigint

#### Defined in

[index.ts:88](https://github.com/daidodo/prereq/blob/9fb1604/src/index.ts#L88)

___

### isBoolean

▸ **isBoolean**(`value`): value is boolean

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is boolean

#### Defined in

[index.ts:87](https://github.com/daidodo/prereq/blob/9fb1604/src/index.ts#L87)

___

### isClass

▸ **isClass**<`T`\>(`Class`): (`value`: `any`) => value is InstanceType<T\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`[]) => `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `Class` | `T` |

#### Returns

`fn`

▸ (`value`): value is InstanceType<T\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

##### Returns

value is InstanceType<T\>

#### Defined in

[index.ts:90](https://github.com/daidodo/prereq/blob/9fb1604/src/index.ts#L90)

___

### isNonNull

▸ **isNonNull**<`T`\>(`value`): value is NonNullable<T\>

Check if a value is neither `null` nor `undefined`.

**`example`**
```
 const a = [1, undefined, 2];   // a is (number | undefined)[]
 const b = a.filter(isNonNull); // b is number[]
```

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

#### Defined in

[index.ts:35](https://github.com/daidodo/prereq/blob/9fb1604/src/index.ts#L35)

___

### isNumber

▸ **isNumber**(`value`): value is number

Check if a value is number.

**`example`**
```
 const a = ['1', 2, '3', 4];   // a is (string | number)[]
 const b = a.filter(isNumber); // b is [2, 4], i.e. number[]
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | The value to be checked |

#### Returns

value is number

true if the value is number, or false otherwise

#### Defined in

[index.ts:73](https://github.com/daidodo/prereq/blob/9fb1604/src/index.ts#L73)

___

### isString

▸ **isString**(`value`): value is string

Check if a value is string.

**`example`**
```
 const a = ['1', 2, '3', 4];   // a is (string | number)[]
 const b = a.filter(isString); // b is ['1', '3'], i.e. string[]
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | The value to be checked |

#### Returns

value is string

true if the value is string, or false otherwise

#### Defined in

[index.ts:86](https://github.com/daidodo/prereq/blob/9fb1604/src/index.ts#L86)
