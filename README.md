[![Node version](https://img.shields.io/node/v/type-guard-helpers.svg?style=flat)](http://nodejs.org/download/)
![build](https://github.com/nicobrinkkemper/type-guard-helpers/actions/workflows/node.js.yml/badge.svg)

[![https://nodei.co/npm/type-guard-helpers.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/type-guard-helpers.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/type-guard-helpers)

# Installation

```
npm install type-guard-helpers
```

# Type Guard Basics

A quick introduction to Type Guards in Typescript.

> [Check out the official documentation about narrowing in Typescript](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

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

> [Check out the documentation of this project](https://nicobrinkkemper.github.io/type-guard-helpers/) for a complete overview.

# Naming conventions

# Examples

The examples will show how to create Type Guards that will cast it to a different Type based on their Type Guard.. The comments relate to what you would see when hovering over the variables in your code editor.

Imagine the following unknown typed variable being available for all the examples.

```ts
const test = {} as unknown; // unknown
```

## Matching a single string

```ts
const isFoo = matchString('foo');

if (isFoo(test)) {
	test; // "foo"
}
```

## Matching a single number

```ts
const isSuccess = matchNumber(200);

if (isSuccess(test)) {
	test; // 200
}
```

## Matching a single PropertyKey

> A PropertyKey is a type that can be used to index objects

```ts
const isStringKey = matchKey('tag');
const isNumberKey = matchKey(0);
const isSymbolKey = matchKey(Symbol('first'));
if (isStringKey(test)) {
	test; // "tag"
}
if (isKey(test)) {
	test; // 0
}
if (isHiddenKey(test)) {
	test; // symbol
}
```

## Combining Type Guards

```ts
const isFoo = matchString('foo');
const isbar = matchString('bar');

if (isFoo(test) || isBar(test)) {
	test; // "foo" | "bar"
}
```

Matching multiple strings

```ts
const isFooBar = matchStrings('home', 'user', 'about');
if (isFooOrBar(test)) {
	test; // "home" | "user" | "about"
}
```

Alternatively

```ts
const isFooBar = matchStringIn(['home', 'user', 'about'] as const);
if (isFooOrBar(test)) {
	test; // "home" | "user" | "about"
}
```

```ts
import {
	guardArray,
	matchSchema,
	matchExactSchema,
	matchString,
	matchStrings,
} from 'type-guard-helpers';

const test = {} as unknown; // unknown

const isBar = matchString('bar');

const isFoo = matchString('foo');

const isFooOrBar = matchStrings(['foo', 'bar'] as const);

const isFooBar = matchSchema({
	foo: isFoo,
	bar: isBar,
});

const isFooBarNested = matchExactSchema({
	foobar: isFooBar,
});

const isFooBarArray = guardArray(isFooBar);

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

## Using third-party Type Guards

Other libraries may also provide Type Guards. Some are even provided natively, such as `Array.isArray`. They should work with any of the helper functions listed here. Feel free to use and combine them.

> Keep in mind that the implementation of third-party helpers may differ substantially. For example, the `isObject` listed here is very different from Lodash's `isObject`.
