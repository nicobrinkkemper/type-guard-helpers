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

# FooBar Example

The code below uses several helper functions to create Guard Types for specific configurations. The comments relate to what you would see when hovering over the variables in your code editor.

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
