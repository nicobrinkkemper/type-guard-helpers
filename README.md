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

## About these helpers

These helper functions offer TypeSafe composing of Guards. All provided functions focus on conveniently working with Type Guard functions.
The functions handle most of the predicate handling.

## Composing objects

```ts
const test = {} as unknown; // unknown
const foo = 'foo';
const bar = 'bar';
const isBar = matchString(bar);
const isFoo = matchString(foo);
const isFooBarItem = guardEither(isFoo, isBar);
const isStatus = matchNumbers(200, 404);
const isFooBarArray = guardArrayValues(isFooBarItem);
const isResponse = matchSchema({
	items: isFooBarArray,
	status: isStatus,
});

if (isResponse(test)) {
	expectType<{
		readonly items: readonly ('foo' | 'bar')[];
		readonly status: 200 | 404;
	}>(test);
}
```

## Composing guards

```ts

const isFooBar = guardAll(
	(value): value is string = typeof value === 'string',
	(value): value is `foo${string}` = value.startsWith('foo'),
	(value): value is `foobar` = value === 'foobar'
);

if (isFooBar(test)) {
	expectType<'foobar'>(test);
}
```

## Error catching

```ts
const isFoo = guardAll(
	(value): value is string => typeof value === 'string',
	(value): value is `foo${string}` => value.startsWith('foo'),
	(value): value is number => typeof value === 'number' // Type 'number' is not assignable to type '`foo${string}`'
);
```

```ts
const foo = 'foo';
const isNull = match(null);
// Argument of type '"foo"' is not assignable to parameter of type 'null'.
if (isNull(foo)) {
	expectType<never>(foo);
}
```

## Negating guards

```ts
const isNotFoo = negateGuard(isFoo);
const fooOrBar = 'foo' as 'foo' | 'bar';

if (isNotFoo(fooOrBar)) {
	expectType<'bar'>(fooOrBar);
}
```

[Go checkout the documentation.](https://nicobrinkkemper.github.io/type-guard-helpers/)
