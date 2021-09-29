import test from 'ava';

import { isFalse } from './isFalse';

test('Should return true for false', (t) => {
  t.is(isFalse(false), true);
});
test('Should return false for anything else', (t) => {
  t.is(isFalse(true), false);
  t.is(isFalse([]), false);
  t.is(isFalse({}), false);
  t.is(isFalse('1'), false);
  t.is(isFalse('true'), false);
  t.is(isFalse('false'), false);
  t.is(isFalse(Symbol(1)), false);
});
