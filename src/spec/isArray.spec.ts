import test from 'ava';

import { isArray } from '../lib/isArray';

test('Should return true for a array', (t) => {
  t.is(isArray([]), true);
});

test('Should return false for anything else', (t) => {
  t.is(isArray(''), false);
  t.is(isArray(1), false);
  t.is(isArray(true), false);
  t.is(isArray({}), false);
  t.is(isArray(Symbol()), false);
});
