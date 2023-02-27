import { expectType } from 'tsd';

import {
  guardPipe,
  isTypeString,
  matchSchema,
  matchString,
  matchType
} from '../src';

import type { CombineObject } from './types';

// Readme example
const foo = matchString('foo');
const bar = matchString('bar');
const matchBarSchema = matchSchema({ bar });
const matchFooSchema = matchSchema({ foo });
const matchFooBarSchema = matchSchema({ foo, bar });
const test = { foo: 'foo', bar: 'bar' };
const testUnknown = { foo: 'bar', bar: 'foo' } as Record<string, unknown>;

if (matchFooBarSchema(test)) {
  expectType<{
    readonly foo: 'foo';
    readonly bar: 'bar';
  }>(test);
  throw new Error('should not be here');
}
// with guard record
const isFooBarSchema = matchSchema({ foo, bar });
if (isFooBarSchema(testUnknown)) {
  expectType<{
    readonly foo: 'foo';
    readonly bar: 'bar';
  }>(testUnknown);
  throw new Error('should not be here');
}

// schemas
const isFooBarPipe = guardPipe(
  matchFooSchema,
  matchBarSchema as typeof matchBarSchema<{
    readonly foo: 'foo';
  }>
);
if (isFooBarPipe(test)) {
  expectType<{
    readonly foo: 'foo';
    readonly bar: 'bar';
  }>(test);
  throw new Error('should not be here');
}
// inline
const isFooBarPipeInline = guardPipe(
  (obj: unknown): obj is object => obj != null && typeof obj === 'object',
  (obj): obj is { readonly foo: 'foo' } => 'foo' in obj && obj.foo === 'foo',
  (obj): obj is CombineObject<typeof obj, { readonly bar: 'bar' }> =>
    'bar' in obj && obj.bar === 'bar'
);
if (isFooBarPipeInline(test)) {
  expectType<{
    readonly foo: 'foo';
    readonly bar: 'bar';
  }>(test);
}
if (isFooBarPipeInline(testUnknown)) {
  expectType<{
    readonly foo: 'foo';
    readonly bar: 'bar';
  }>(testUnknown);
}

const unknownFoobar = 'foobar' as unknown;
const foobar = 'foobar' as string;
const startsWithFoo = guardPipe(
  isTypeString,
  (val): val is typeof val & `foo${string}` => val.startsWith('foo')
);

if (startsWithFoo(foobar)) {
  expectType<`foo${string}`>(foobar);
}

const isFooBarGuardPipe = guardPipe(
  matchType('string'),
  (val): val is typeof val & `foo${string}` => val.startsWith('foo'),
  (val): val is typeof val & `foobar` => (val as string) === foobar
);

if (isFooBarGuardPipe(foobar)) {
  expectType<'foobar'>(foobar);
} else {
  expectType<string>(foobar);
}

if (isFooBarGuardPipe(unknownFoobar)) {
  expectType<'foobar'>(unknownFoobar);
} else {
  expectType<unknown>(unknownFoobar);
}

const isFooBarInline = guardPipe(
  (val: unknown): val is string => {
    return typeof val === 'string';
  },
  (val): val is typeof val & `foo${string}` => {
    expectType<string>(val);
    return val.startsWith('foo');
  },
  (val): val is typeof val & `foobar` => {
    expectType<`foo${string}`>(val);
    return (val as string) === 'foobar';
  }
);
// guardAll given tuple or spread
const isFooGuards = [
  (val: unknown): val is string => {
    return typeof val === 'string';
  },
  (val: string): val is `foo` => {
    return val === 'foo';
  }
] as const;

// guardAll
const guardAllGivenSpread = guardPipe(...isFooGuards);
const guardAllGivenInline = guardPipe(isFooGuards[0], isFooGuards[1]);
if (guardAllGivenInline(unknownFoobar)) {
  expectType<'foo'>(unknownFoobar);
} else {
  expectType<unknown>(unknownFoobar);
}

if (guardAllGivenSpread(foobar)) {
  expectType<'foo'>(foobar);
}

if (isFooBarInline(foobar)) {
  expectType<'foobar'>(foobar);
} else {
  expectType<string>(foobar);
}

if (isFooBarInline(unknownFoobar)) {
  expectType<'foobar'>(unknownFoobar);
} else {
  expectType<unknown>(unknownFoobar);
}

const readmeExample = guardPipe(
  isTypeString,
  (value): value is typeof value & `foo${string}` => {
    expectType<string>(value);
    return value.startsWith('foo');
  }
  //	(value): value is number => typeof value === 'number' // Type 'number' is not assignable to type '`foo${string}`'
);

if (readmeExample(foobar)) {
  const t = foobar.startsWith('foo'); //  no error
  expectType<boolean>(t);
  expectType<`foo${string}`>(foobar);
}
