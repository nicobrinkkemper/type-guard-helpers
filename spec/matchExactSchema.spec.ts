import test from 'ava';

import { matchExactSchema } from '../src/matchExactSchema';

test('Should work with anonymous Type Guard functions', (t) => {
  t.is(
    matchExactSchema({
      foo: (value: unknown): value is 'foo' => value === 'foo'
    })({
      foo: 'foo'
    }),
    true
  );
});
test('Should return false when given additional unspecified values', (t) => {
  t.is(
    matchExactSchema({
      foo: (value: unknown): value is 'foo' => value === 'foo'
    })({
      foo: 'foo',
      extra: 'bar'
    }),
    false
  );
});

test('Should work with Array.isArray', (t) => {
  t.is(matchExactSchema({ foo: Array.isArray })({ foo: [] }), true);
});
