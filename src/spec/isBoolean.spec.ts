import test from 'ava';

import { isBoolean } from '../lib/isBoolean';

test('Should return true for true or false', (t) => {
  t.is(isBoolean(true), true);
  t.is(isBoolean(false), true);
});
test('Should return false for anything else', (t) => {
  t.is(isBoolean([]), false);
  t.is(isBoolean({}), false);
  t.is(isBoolean('1'), false);
  t.is(isBoolean('true'), false);
  t.is(isBoolean('false'), false);
  t.is(isBoolean(Symbol()), false);
});
