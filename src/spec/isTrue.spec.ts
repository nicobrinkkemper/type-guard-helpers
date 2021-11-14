import test from 'ava';

import { isTrue } from '../lib/isTrue';

test('Should return true for true', (t) => {
	t.is(isTrue(true), true);
});
test('Should return false for anything else', (t) => {
	t.is(isTrue(false), false);
	t.is(isTrue([]), false);
	t.is(isTrue({}), false);
	t.is(isTrue('1'), false);
	t.is(isTrue('true'), false);
	t.is(isTrue('false'), false);
	t.is(isTrue(Symbol(1)), false);
});
