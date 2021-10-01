import test from 'ava';

import { isArrayLike } from '../lib/isArrayLike';
import { isObjectLike } from '../lib/isObjectLike';
import { isStringLike } from '../lib/isStringLike';

const isBar = isStringLike('bar');
const isFoo = isStringLike('foo');
const isFooBar = isObjectLike({
  foo: isFoo,
  bar: isBar,
});

const isFooBarArray = isArrayLike(isFooBar);
const isFooNested = isObjectLike({
  foobar: isFooBar,
});

test('Should return true because this is a correct foo bar object', (t) => {
  t.is(isFooBar({ foo: 'foo', bar: 'bar' }), true);
});

test('Should return false because the strings do not match', (t) => {
  t.is(isFooBar({ foo: 'bar', bar: 'foo' }), false);
});

test("Should return false because it's not a correct nested foo bar 1", (t) => {
  t.is(isFooNested({ foobar: { foo: 'foo' } }), false);
});

test("Should return false because it's not a correct nested foo bar 2", (t) => {
  t.is(isFooNested({ foo: 'foo', foobar: { foo: 'foo', bar: 'bar' } }), false);
});

test("Should return false because it's not a correct nested foo bar 3", (t) => {
  t.is(
    isFooNested({
      foobar: { foo: 'foo', bar: 'BAD' },
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
        someUnknownValue: 69,
      },
    }),
    false
  );
});

test("Should return false because it's not a foo bar array", (t) => {
  t.is(
    isFooBarArray([
      { foo: 'foo', bar: 'bar' },
      { foo: 'foo', BAD: 'BAD' },
    ]),
    false
  );
});

test("Should return true because it's a correct foo bar array", (t) => {
  t.is(isFooBarArray([{ foo: 'foo', bar: 'bar' }]), true);
});
