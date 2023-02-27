import test from 'ava';

import { guardArrayValues, guardPipe, logGuard, matchType } from '../src';

const startsWithFoo = logGuard(
  guardPipe(matchType('string'), (val): val is `foo${string}` => {
    return !!val.startsWith('foo');
  })
);

const isFooArray = guardArrayValues(startsWithFoo);

test('Should return true for things that start with foo', (t) => {
  t.is(startsWithFoo('fooBath'), true);
  t.is(startsWithFoo('fooDrink'), true);
  t.is(isFooArray(['fooA', 'fooB', 'fooC']), true);
});

test('Should return false for anything else', (t) => {
  t.is(isFooArray(['barf'] as readonly unknown[]), false);
  t.is(startsWithFoo(['oo'] as unknown), false);
  t.is(startsWithFoo('bar'), false);
});
