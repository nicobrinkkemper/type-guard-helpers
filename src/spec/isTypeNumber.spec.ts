import test from 'ava';

import { isTypeNumber } from '../lib/isTypeNumber';

test('Should return true for a number', (t) => {
	t.is(isTypeNumber(1), true);
});
test('Should return false for anything else', (t) => {
	t.is(isTypeNumber([] as unknown), false);
	t.is(isTypeNumber({} as unknown), false);
	t.is(isTypeNumber(true as unknown), false);
	t.is(isTypeNumber('1' as unknown), false);
	t.is(isTypeNumber(Symbol() as unknown), false);
});
