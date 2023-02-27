import test from 'ava';

import { isTrue } from '../src/isTrue';

test('Should return true for true', (t) => {
  t.is(isTrue(true), true);
});
test('Should return false for anything else', (t) => {
  t.is(isTrue(false as boolean), false);
  t.is(isTrue([] as unknown), false);
  t.is(isTrue({} as unknown), false);
  t.is(isTrue('1' as unknown), false);
  t.is(isTrue('true' as unknown), false);
  t.is(isTrue('false' as unknown), false);
  t.is(isTrue(Symbol(1) as unknown), false);
});
