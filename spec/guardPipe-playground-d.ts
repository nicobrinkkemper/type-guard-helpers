import { expectType } from 'tsd';

import { guardPipe, matchSchema, matchString } from '../src';

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
