import test from 'ava';

import { isNull } from '../src/isNull';

test('Should return true for null or undefined', (t) => {
  t.is(isNull(null), true);
});
test('Should return false for anything else', (t) => {
  t.is(isNull([] as unknown), false);
  t.is(isNull({} as unknown), false);
  t.is(isNull(undefined as unknown), false);
  t.is(isNull(true as unknown), false);
  t.is(isNull(false as unknown), false);
  t.is(isNull('1' as unknown), false);
  t.is(isNull(Symbol() as unknown), false);
});
