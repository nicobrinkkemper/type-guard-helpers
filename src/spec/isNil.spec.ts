import test from 'ava';

import { isNil } from '../lib/isNil';

test('Should return true for null or undefined', (t) => {
  t.is(isNil(null), true);
  t.is(isNil(undefined), true);
});
test('Should return false for anything else', (t) => {
  t.is(isNil([]), false);
  t.is(isNil({}), false);
  t.is(isNil(true), false);
  t.is(isNil(false), false);
  t.is(isNil('1'), false);
  t.is(isNil(Symbol()), false);
});
