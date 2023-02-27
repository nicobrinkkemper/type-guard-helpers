import { expectType } from 'tsd';
// these -d.ts files are a playground to test the type-check patterns
// try messing any of the types up to see what errors you'll get

import { guardAll, guardRecord, matchSchema, matchString } from '../src';

import { guardAllIn } from './guardAllIn';
import { isObject } from './isObject';

const test = {} as Record<string, unknown>;

// Readme example
const foo = matchString('foo');
const bar = matchString('bar');
const matchFooSchema = matchSchema({ foo });
const matchBarSchema = matchSchema({ bar });
const isFooBar = guardAll(matchFooSchema, matchBarSchema);
const isFooBarRecord = guardRecord(isFooBar);
if (isFooBarRecord(test)) {
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
    readonly foo: 'foo';
    readonly bar: 'bar';
  }>(test);
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
