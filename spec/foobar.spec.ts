import test from 'ava';

import { guardArrayValues } from '../src/guardArrayValues';
import { match } from '../src/match';
import { matchExactSchema } from '../src/matchExactSchema';

const isBar = match('bar');
const isFoo = match('foo');
const isFooBar = matchExactSchema({
  foo: isFoo,
  bar: isBar
});

const isFooBarArray = guardArrayValues(isFooBar);

const isFooNested = matchExactSchema({
  foobar: isFooBar
});

test('Should return true because this is a correct foo bar object', (t) => {
  t.is(isFooBar({ foo: 'foo', bar: 'bar' }), true);
});

test('Should return false because the strings do not match', (t) => {
  t.is(isFooBar({ foo: 'bar', bar: 'foo' }), false);
});

test("Should return false because it's not a correct nested foo bar 1", (t) => {
  t.is(
    isFooNested({ foobar: { foo: 'foo' } } as unknown as {
      foobar: {
        readonly foo: unknown;
        readonly bar: unknown;
      };
    }),
    false
  );
});

test("Should return false because it's not a correct nested foo bar 2", (t) => {
  t.is(
    isFooNested({ foo: 'foo', foobar: { foo: 'foo', bar: 'bar' } } as never),
    false
  );
});

test("Should return false because it's not a correct nested foo bar 3", (t) => {
  t.is(
    isFooNested({
      foobar: { foo: 'foo', bar: 'BAD' },
      extra: 'problem'
    }),
    false
  );
});

test("Should return true because it's a correct nested foo bar", (t) => {
  t.is(isFooNested({ foobar: { foo: 'foo', bar: 'bar' } }), true);
});

test("Should return false because it's a nested foo bar that contains a additional unknown value", (t) => {
  t.is(
    isFooNested({
      foo: 'foo',
      bar: 'bar',
      foobar: {
        foo: 'foo',
        bar: 'bar',
        someUnknownValue: 69
      }
    }),
    false
  );
});

test("Should return false because it's not a foo bar array", (t) => {
  t.is(
    isFooBarArray([
      { foo: 'foo', bar: 'bar' },
      { foo: 'foo', BAD: 'BAD' } as never
    ]),
    false
  );
});

test("Should return true because it's a correct foo bar array", (t) => {
  t.is(
    isFooBarArray([
      { foo: 'foo', bar: 'bar' },
      { foo: 'foo', bar: 'bar' }
    ]),
    true
  );
});
