import test from 'ava';

import { isTypeBoolean } from '../lib/isTypeBoolean';

test('Should return true for true or false', (t) => {
	t.is(isTypeBoolean(true), true);
	t.is(isTypeBoolean(false), true);
});
test('Should return false for anything else', (t) => {
	t.is(isTypeBoolean([]), false);
	t.is(isTypeBoolean({}), false);
	t.is(isTypeBoolean('1'), false);
	t.is(isTypeBoolean('true'), false);
	t.is(isTypeBoolean('false'), false);
	t.is(isTypeBoolean(Symbol()), false);
});
