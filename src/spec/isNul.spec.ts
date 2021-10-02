import test from 'ava';

import { isNull } from '../lib/isNull';

test('Should return true for null or undefined', (t) => {
  t.is(isNull(null), true);
});
test('Should return false for anything else', (t) => {
  t.is(isNull([]), false);
  t.is(isNull({}), false);
  t.is(isNull(undefined), false);
  t.is(isNull(true), false);
  t.is(isNull(false), false);
  t.is(isNull('1'), false);
  t.is(isNull(Symbol()), false);
});
