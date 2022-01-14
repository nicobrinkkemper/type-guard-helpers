import test from 'ava';

import { isTypeBoolean } from '../src/isTypeBoolean';

test('Should return true for true or false', (t) => {
	t.is(isTypeBoolean(true), true);
	t.is(isTypeBoolean(false), true);
});
test('Should return false for anything else', (t) => {
	t.is(isTypeBoolean([] as unknown), false);
	t.is(isTypeBoolean({}), false);
	t.is(isTypeBoolean('1' as unknown), false);
	t.is(isTypeBoolean('true' as unknown), false);
	t.is(isTypeBoolean('false' as unknown), false);
	t.is(isTypeBoolean(Symbol() as unknown), false);
});
