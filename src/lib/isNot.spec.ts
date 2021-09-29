import test from 'ava';

import { isNot } from './isNot';
import { isNull } from './isNull';

test('Should return true for anything but null', (t) => {
  t.is(isNot(isNull)(false), true);
  t.is(isNot(isNull)(...([] as unknown as readonly [unknown])), true);
});
test('Should return false because it got null', (t) => {
  t.is(isNot(isNull)(null), false);
});
