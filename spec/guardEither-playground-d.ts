import { expectType } from 'tsd';

import type { AnyPrimitive } from '../index';
import {
  guardEither,
  guardEitherIn,
  isNull,
  isTypeString,
  matchExactSchema,
  matchString
} from '../index';

const isStringOrNullSpread = guardEither(isNull, isTypeString);
const isStringOrNullArray = guardEitherIn([isNull, isTypeString]);

const test = {} as AnyPrimitive;
if (isStringOrNullSpread(test)) {
  expectType<string | null>(test);
}
if (isStringOrNullArray(test)) {
  expectType<string | null>(test);
}

const foo = matchString('foo');
const bar = matchString('bar');
const matchBarSchemaExact = matchExactSchema({ bar });
const matchFooSchemaExact = matchExactSchema({ foo });
const matchFooBarSchemaExact = matchExactSchema({
  foo,
  bar
});
const orFooBar = guardEither(
  matchBarSchemaExact,
  matchFooSchemaExact,
  matchFooBarSchemaExact
);
const testExact = { foo: 'foo', bar: 'bar', z: 'a' } as Record<
  'foo' | 'bar',
  string
>;
if (orFooBar(testExact)) {
  expectType<
    | {
        readonly foo: 'foo';
        readonly bar: 'bar';
      }
    | {
        readonly foo: string;
        readonly bar: 'bar';
      }
    | {
        readonly foo: 'foo';
        readonly bar: string;
      }
  >(testExact);
}
