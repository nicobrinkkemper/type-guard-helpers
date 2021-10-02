import test from 'ava';

import { isString } from '../lib/isString';

test('Should return true for a string', (t) => {
  t.is(isString(''), true);
});

test('Should return false for anything else', (t) => {
  t.is(isString([]), false);
  t.is(isString(1), false);
  t.is(isString(true), false);
  t.is(isString({}), false);
  t.is(isString(Symbol()), false);
});
