import test from 'ava';

import { isTypeString } from '../lib/isTypeString';

test('Should return true for a string', (t) => {
	t.is(isTypeString(''), true);
});

test('Should return false for anything else', (t) => {
	t.is(isTypeString([] as unknown), false);
	t.is(isTypeString(1 as unknown), false);
	t.is(isTypeString(true as unknown), false);
	t.is(isTypeString({} as unknown), false);
	t.is(isTypeString(Symbol() as unknown), false);
});
