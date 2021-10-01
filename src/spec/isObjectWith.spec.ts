import test from 'ava';

import { isObjectWith } from '../lib/isObjectWith';

test('Should return false when specified values are not present', (t) => {
  t.is(
    isObjectWith({
      foo: (value: unknown): value is 'foo' => value === 'foo',
    })({
      bar: 'not checked',
    }),
    false
  );
});

test('Should return false when specified values are not correct', (t) => {
  t.is(
    isObjectWith({
      foo: (value: unknown): value is 'foo' => value === 'foo',
    })({
      foo: 'bad',
    }),
    false
  );
});

test('Should return true with additional unspecified values', (t) => {
  t.is(
    isObjectWith({
      foo: (value: unknown): value is 'foo' => value === 'foo',
    })({
      foo: 'foo',
      bar: 'not checked, but ok',
    }),
    true
  );
});

test('Should work with Array.isArray', (t) => {
  t.is(isObjectWith({ foo: Array.isArray })({ foo: [], bar: {} }), true);
});