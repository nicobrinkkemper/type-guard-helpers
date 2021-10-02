import test from 'ava';

import { isObjectLike } from './isObjectLike';

test('Should work with anonymous Type Guard functions', (t) => {
  t.is(
    isObjectLike({
      foo: (value: unknown): value is 'foo' => value === 'foo',
    })({
      foo: 'foo',
    }),
    true
  );
});
test('Should return false when given additional unspecified values', (t) => {
  t.is(
    isObjectLike({
      foo: (value: unknown): value is 'foo' => value === 'foo',
    })({
      foo: 'foo',
      extra: 'bar',
    }),
    false
  );
});

test('Should work with Array.isArray', (t) => {
  t.is(isObjectLike({ foo: Array.isArray })({ foo: [] }), true);
});
