import test from 'ava';

import { isNumber } from '../lib/isNumber';

test('Should return true for a number', (t) => {
  t.is(isNumber(1), true);
});
test('Should return false for anything else', (t) => {
  t.is(isNumber([]), false);
  t.is(isNumber({}), false);
  t.is(isNumber(true), false);
  t.is(isNumber('1'), false);
  t.is(isNumber(Symbol()), false);
});
