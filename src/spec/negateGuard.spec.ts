import test from 'ava';

import { isNull } from '../lib/isNull';
import { negateGuard } from '../lib/negateGuard';

test('Should return true for anything but null', (t) => {
	t.is(negateGuard(isNull)(false), true);
});
test('Should return false because it got null', (t) => {
	t.is(negateGuard(isNull)(null), false);
});
