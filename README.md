[![Node version](https://img.shields.io/node/v/type-guard-helpers.svg?style=flat)](http://nodejs.org/download/)
![build](https://github.com/nicobrinkkemper/type-guard-helpers/actions/workflows/node.js.yml/badge.svg)

[![https://nodei.co/npm/type-guard-helpers.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/type-guard-helpers.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/type-guard-helpers)

# Installation

```
npm install type-guard-helpers
```

# Documentation

> [Documentation](https://nicobrinkkemper.github.io/type-guard-helpers/)

> [Official documentation about narrowing in Typescript](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

# Type Guard Basics

A quick introduction to Type Guards in Typescript.

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

## Examples

```ts
const test = {} as unknown; // unknown
const foo = 'foo';
const bar = 'bar';
const isBar = matchString(bar);
const isFoo = matchString(foo);
const isFooBarRecord = matchSchema({
	foo: isFoo,
	bar: isBar,
});
const isFooBarRecords = guardArray(isFooBarRecord);

if (isFooBarRecord(test)) {
	test; // readonly { readonly foo: "foo"; readonly bar: "bar"; }
}

if (isFooBarArray(test)) {
	test; // readonly { readonly foo: "foo"; readonly bar: "bar"; }[]
}

if (isFooOrBar(test)) {
	test; // "bar" | "foo"
}

// composition

if (isFoo(test) || isBar(test)) {
	test; // "foo" | "bar"
}

if (matchStrings(foo, bar)(test)) {
	test; // "foo" | "bar"
}

if (matchStringIn([foo, bar] as const)(test)) {
	test; // "foo" | "bar"
}

if (
	guardAll(
		isTypeString,
		(str): value is `foo${string}` => str.startsWith(foo) // (parameter) str: string
	)(test)
) {
	test; // `foo${string}`
}
```

[Go checkout the documentation.](https://nicobrinkkemper.github.io/type-guard-helpers/)

## Using third-party Type Guards

Other libraries may also provide Type Guards. Some are even provided natively, such as `Array.isArray`. They should work with any of the helper functions listed here. Feel free to use and combine them.
