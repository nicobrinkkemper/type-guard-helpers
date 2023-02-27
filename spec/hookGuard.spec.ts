import test from 'ava';

import { guardArrayValues, guardPipe, hookGuard, matchType } from '../src';
const someGuard = guardPipe(
  matchType('string'),
  (val): val is `foo${string}` => {
    return !!val.startsWith('foo');
  }
);
const startsWithFoo = hookGuard(
  someGuard,
  (val) => val,
  (val) => val
);
const startsWithFooWithDefaults = hookGuard(someGuard);

const isFooArray = guardArrayValues(startsWithFoo);
const isFooArrayDefaults = guardArrayValues(startsWithFooWithDefaults);

test('Should return true for things that start with foo', (t) => {
  t.is(startsWithFoo('fooBath'), true);
  t.is(startsWithFooWithDefaults('fooBath'), true);
  t.is(startsWithFoo('fooDrink'), true);
  t.is(startsWithFooWithDefaults('fooDrink'), true);
  t.is(isFooArrayDefaults(['fooA', 'fooB', 'fooC']), true);
});

test('Should return false for anything else', (t) => {
  t.is(isFooArray(['barf']), false);
  t.is(isFooArrayDefaults(['barf']), false);
  t.is(startsWithFoo(['oo']), false);
  t.is(startsWithFooWithDefaults(['oo']), false);
  t.is(startsWithFoo('bar'), false);
  t.is(startsWithFooWithDefaults(['bar']), false);
});
