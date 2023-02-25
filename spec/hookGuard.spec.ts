import test from 'ava';

import { guardPipe, hookGuard, matchType } from '../src';
import { guardArrayValues } from '../src/guardArrayValues';

const startsWithFoo = hookGuard(
  guardPipe(matchType('string'), (val): val is `foo${string}` => {
    return !!val.startsWith('foo');
  }),
  (val) => val,
  (val) => val
);

const isFooArray = guardArrayValues(startsWithFoo);

test('Should return true for things that start with foo', (t) => {
  t.is(startsWithFoo('fooBath'), true);
  t.is(startsWithFoo('fooDrink'), true);
  t.is(isFooArray(['fooA', 'fooB', 'fooC']), true);
});

test('Should return false for anything else', (t) => {
  t.is(isFooArray(['barf'] as unknown), false);
  t.is(startsWithFoo(['oo'] as unknown), false);
  t.is(startsWithFoo('bar'), false);
});
