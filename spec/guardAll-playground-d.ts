import { expectType } from 'tsd';
// these -d.ts files are a playground to test the type-check patterns
// try messing any of the types up to see what errors you'll get

import {
  guardAll,
  guardPipe,
  isRecord,
  matchSchema,
  matchString
} from '../src';

import { guardAllIn } from './guardAllIn';
import { isObject } from './isObject';
import type { CombineObject } from './types';

const test = {} as unknown;
const testWrong = { foo: 'bar', bar: 'foo' };

if (isRecord(test)) {
  expectType<Record<PropertyKey, unknown>>(test);
}
// Readme example
const foo = matchString('foo');
const bar = matchString('bar');
const matchFooSchema = matchSchema({ foo });
const matchBarSchema = matchSchema({ bar });
const isFooBar = guardAll(matchFooSchema, matchBarSchema);
if (isFooBar(test)) {
  expectType<{
    readonly foo: 'foo';
    readonly bar: 'bar';
  }>(test);
}
const isFooBar2 = guardAllIn([matchFooSchema, matchBarSchema]);
if (isFooBar2(test)) {
  expectType<{
    readonly foo: 'foo';
    readonly bar: 'bar';
  }>(test);
}

// Guard all in
const isFooBarGuardAllIn = guardAll(isObject, matchFooSchema, matchBarSchema);
if (isFooBarGuardAllIn(test)) {
  expectType<{
    readonly bar: 'bar';
    readonly foo: 'foo';
  }>(test);
}
if (isFooBarGuardAllIn(testWrong)) {
  expectType<{
    readonly foo: 'foo';
    readonly bar: 'bar';
  }>(testWrong);
}

// Guard all
const isFooBarGuardPipe = guardPipe(isObject, matchFooSchema, matchBarSchema);
if (isFooBarGuardPipe(test)) {
  expectType<{
    readonly foo: 'foo';
    readonly bar: 'bar';
  }>(test);
}
if (isFooBarGuardPipe(testWrong)) {
  expectType<{
    readonly foo: 'foo';
    readonly bar: 'bar';
  }>(testWrong);
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
if (isFooBarPipeInline(testWrong)) {
  expectType<{
    readonly foo: 'foo';
    readonly bar: 'bar';
  }>(testWrong);
}

// inline in
const isFooBarInline2 = guardAll(
  isObject,
  (obj: { foo?: string }): obj is { readonly foo: 'foo' } => obj?.foo === 'foo',
  // note: since we use guardAll instead of guardPipe, we need to
  // explicitly specify the type of the parameter, but this
  // may also be a good thing, since we can use a type that is not a subtype of the previous type
  (obj: { bar?: string }): obj is { readonly bar: 'bar' } => obj?.bar === 'bar'
);

if (isFooBarInline2(test)) {
  expectType<{
    readonly foo: 'foo';
    readonly bar: 'bar';
  }>(test);
}
if (isFooBarInline2(testWrong)) {
  expectType<{
    readonly foo: 'foo';
    readonly bar: 'bar';
  }>(testWrong);
}
