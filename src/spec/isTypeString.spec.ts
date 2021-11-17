import test from 'ava';

import { isTypeString } from '../lib/isTypeString';

test('Should return true for a string', (t) => {
	t.is(isTypeString(''), true);
});

test('Should return false for anything else', (t) => {
	t.is(isTypeString([]), false);
	t.is(isTypeString(1), false);
	t.is(isTypeString(true), false);
	t.is(isTypeString({}), false);
	t.is(isTypeString(Symbol()), false);
});
