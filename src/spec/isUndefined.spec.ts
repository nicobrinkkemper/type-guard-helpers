import test from 'ava';

import { isUndefined } from '../lib/isUndefined';

test('Should return true for undefined', (t) => {
  t.is(isUndefined(undefined), true);
});

test('Should return false for anything else', (t) => {
  t.is(isUndefined([]), false);
  t.is(isUndefined(1), false);
  t.is(isUndefined(false), false);
  t.is(isUndefined('undefined'), false);
  t.is(isUndefined(null), false);
  t.is(isUndefined({}), false);
  t.is(isUndefined(Symbol()), false);
});
