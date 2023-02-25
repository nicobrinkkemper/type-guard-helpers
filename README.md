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

## Why these helpers?

These helper functions offer type safe creation and composing of Type Guard functions. 
The `is` keyword needs to be explicit and must be valid, which makes type guard functions
different from normal functions.

## Pro active checks
All provided functions use a pattern that will pro-actively check if the supplied function
can be used at all, similar to using if statements. For example:

```ts
// This comparison appears to be unintentional because the types '"home"' and '"about"' have no overlap.ts(2367)
const page = 'home'
if (page === 'about') {
  page; // never
}

const isAbout = match('about');
// Argument of type '"home"' is not assignable to parameter of type '"about"'
if (isAbout(page)) {
  label; // never
}
if (isAbout(page as 'home' | 'about')) {
  page; // const label: "home"
}
```

## Composing objects
All functions take one argument at a time. It makes it easier to reuse and compose type guards.

```ts
const test = {} as unknown; // unknown
const foo = 'foo';
const bar = 'bar';
const isBar = match(bar);
const isFoo = match(foo);
const isFooBarItem = guardEither(isFoo, isBar);
const isStatus = matchEither(200, 404);
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
const isFooBar = guardPipe(
	(value): value is string => typeof value === 'string',
	(value): value is `foo${string}` => value.startsWith('foo'),
	(value): value is `foobar` => value === 'foobar'
);

if (isFooBar(test)) {
	expectType<'foobar'>(test);
}
```

## Error catching

```ts
const isFoo = guardPipe(
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

Non nullable
```ts
const testValue = null as {foo:'bar'} | null
if (isNonNullable(testValue)) {
	expectType<{foo:'bar'}>(testValue);
}
```
Composing with non nullable
```ts

const testValues = [null, { foo: 'bar' }, null] as const;
const filterNonNullable = filterGuard(
  // fix the argument to the function
  isNonNullable as typeof isNonNullable<(typeof testValues)[number]>
);
const testValuesFiltered = filterNonNullable(testValues);
expectType<
  readonly [
    {
      readonly foo: 'bar';
    }
  ]
>(testValuesFiltered);
```


[Go checkout the documentation.](https://nicobrinkkemper.github.io/type-guard-helpers/)
