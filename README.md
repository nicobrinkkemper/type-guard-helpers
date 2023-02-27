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

## Composing objects
We can compose complex type predicates by combining several small ones.
It helps to write them all out while making the name more specific each time a predicate is made.

```ts

const isItemType = matchEither('a', 'b');
const isItem = matchSchema({ type: isItemType });
const isItems = guardArrayValues(isItem);

const isItemResponse = matchSchema({
  items: isItems
});

const Input = {} as Record<string, unknown>; // unknown

if (isItemResponse(Input)) {
  expectType<{
	readonly items: readonly ({ type: 'a' | 'b' })[];
  }>(Input);
}
```


## Combining guards
The output of several guards can be combined to narrow to a single type
```ts
const isFooBar = guardAll(
	(value: {type?:string}): value is {type:'a'} => value.type === 'a',
	(value: {subType?:string}): value is {subType:'b'} => value.subType === 'b'
);

if (isFooBar(test)) {
	expectType<{
		readonly type: 'a',
		readonly subType: 'b'
	}>(test);
}
```
## Piping guards
It is also possible to pipe type guards top to bottom. This works best
when functions are inlined. The output of the each guard is piped
to the parameter of the next.
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

## Negating guards
Negating guards is possible, though it adds some complexity so it's best to avoid using it if possible.
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
If you must use a negating type guard inside a composing function, you can bind the 
input of the function as such:
```ts
const testValues = [null, { foo: 'bar' }, null] as const;
const filterNonNullable = filterGuard(
  // fix the argument to the function
  isNonNullable as typeof isNonNullable<(typeof testValues)[number]>
);
// same as excludeGuard(isNullable)
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
