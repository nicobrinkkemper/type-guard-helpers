import test from 'ava';

import { isTruthy } from '../lib/isTruthy';

test('Should return true for true', (t) => {
	t.is(isTruthy(true), true);
	t.is(isTruthy([]), true);
	t.is(isTruthy({}), true);
	t.is(isTruthy('true'), true);
	t.is(isTruthy('false'), true);
	t.is(isTruthy('0'), true);
	t.is(isTruthy(Symbol(1)), true);
});
test('Should return false for anything else', (t) => {
	t.is(isTruthy(false), false);
	t.is(isTruthy(null), false);
	t.is(isTruthy(''), false);
	t.is(isTruthy(0), false);
});
