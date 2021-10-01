[![Node version](https://img.shields.io/node/v/type-guard-helpers.svg?style=flat)](http://nodejs.org/download/)
[![https://nodei.co/npm/YOUR-MODULE-NAME.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/type-guard-helpers.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/type-guard-helpers)

[![https://nodei.co/npm/YOUR-MODULE-NAME.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/type-guard-helpers.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/type-guard-helpers)

![build](https://github.com/nicobrinkkemper/type-guard-helpers/actions/workflows/node.js.yml/badge.svg)

# Installation

```
npm install type-guard-helpers
```

# Type Guard Basics

A quick introduction to Type Guards in Typescript.

> [Check out the official documentation](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

## Idiomatic Type Guard

A Type Guard is a technique to narrow down the type of a variable.
They are really just if-statements:

```ts
if (status === 'success') status; // status: 'success'
```

## User Defined Type Guard

Type Guards can be compartmentalized by defining a function using the `is` keyword:

```ts
const isSuccess = (value: unknown): value is 'success' => value === 'success';
if (isSuccess(status)) status; // status: 'success'
```

# Provided Helpers

See [documentation](https://nicobrinkkemper.github.io/type-guard-helpers/) for a complete overview.

## Standard Type Guards

Some standard Type Guards are provided by this library. These are purposefully simple functions using the `typeof` syntax under the hood.

### `isArray<value>`

Value is array

> This just `Array.isArray` with a modern Typescript definition that doesn't use any.

### `isFunction<value>`

Value is function

### `isNil<value>`

Value is null or undefined

### `isNull<value>`

Value is null

### `isNumber<value>`

Value is number

### `isObject<value>`

Value is object

### `isPropertyKey<value>`

Value is string, number or symbol

### `isUndefined<value>`

Value is undefined

## Higher Order Type Guards

These functions can be used to compose detailed types of arrays, objects or strings.

### `isArrayLike<guard><value>`

Value is array that only contain values matching the given guard.

```ts
isArrayLike(isArray)(value); // value: unknown[][]
```

### `isKey<key><value>`

Value is object that contains the given key.

```ts
isKey('message')(value); // value {message:unknown}
```

### `isKeyOf<schema><value>`

Value is a key of schema object.

```ts
isKeyOf(obj)(value); // value: keyof obj
```

### `isNot<guard><value>`

Value does not match the given guard.

```ts
isNot(isString)(value); // value = Exclude<typeof value,string>
```

### `isObjectLike<schema><value>`

Value is object with key/values exactly like given schema.

```ts
isObjectLike({ articles: isArray })(value); // value: {articles: unknown[]}
```

### `isObjectWith<schema><value>`

Value is object with the same key/values as given schema.

> Will allow unknown key/values, useful for duck-typing approach.

```ts
isObjectWith({ articles: isArray })(value); // value: {articles: unknown[]} & typeof value
```

### `isStringLike<...keys[]><value>`

Value is string that matches any of the keys given as arguments.

```ts
isStringLike('success')(value); // value: 'success'
```

### `isStringIn<keys[]><value>`

Value is string that matches any of the keys given as array.

```ts
isStringIn(['success', 'error'] as const)(value); // value: 'success' | 'error'
```

## Type Guard Modifiers

These helper functions upgrade existing type guards so they may allow for alternative values.

### `maybeEmptyArray<guard><value>`

```ts
maybeEmptyArray(isString)(value); // value: [] | string
```

### `maybeNull<guard><value>`

```ts
maybeNull(isString)(value); // value: null | string
```

### `maybeUndefined<guard><value>`

```ts
maybeUndefined(isString)(value); // value: undefined | string
```

## Type Guard Generics

These types are exported by this library. You can use them to work with Type Guards.

### `AnyGuardType`

Returns the type on which other guards extend.

```ts
<GUARD extends AnyGuardType>(guard: GUARD) => guard();
```

### `GuardSchema<schema>`

Returns the type on which a object schema extends.

```ts
<SCHEMA extends GuardSchema<SCHEMA>>(schema: SCHEMA) => isObjectLike(schema);
```

### `GuardType<guard>`

Returns the type that a Guard will assign to a variable.

```ts
GuardType<typeof isString> // string
GuardType<typeof Array.isArray> // any[]
```

## Using third-party Type Guards

Other libraries may also provide Type Guards. Some are even provided natively, such as `Array.isArray`. They should work with any of the helper functions listed here. Feel free to use and combine them.

> Keep in mind that the implementation of third-party helpers may differ substantially. For example, the `isObject` listed here is very different from Lodash's `isObject`.

# FooBar Example

The code below uses several helper functions to create Guard Types for specific configurations. The comments relate to what you would see when hovering over the variables in your code editor.

```ts
import {
  isArrayLike,
  isObjectLike,
  isObjectWith,
  isStringLike,
  isStringIn,
} from 'type-guard-helpers';

const test = {} as unknown; // unknown

const isBar = isStringLike('bar');

const isFoo = isStringLike('foo');

const isFooBar = isObjectLike({
  foo: isFoo,
  bar: isBar,
});

const isFooBarNested = isObjectWith({
  foobar: isFooBar,
});

const isFooBarArray = isArrayLike(isFooBar);

const isFooOrBar = isStringIn(['foo', 'bar'] as const);

if (isFooBar(test)) {
  test.foo; // foo: "foo"
  test.bar; // bar: "bar"
}

if (isFooBarArray(test)) {
  test; // readonly { readonly foo: "foo"; readonly bar: "bar"; }[]
}

if (isFooBarNested(test)) {
  test.foobar; // { readonly foo: "foo"; readonly bar: "bar"; }
}

if (isFooOrBar(test)) {
  test; // "bar" | "foo"
}
```
