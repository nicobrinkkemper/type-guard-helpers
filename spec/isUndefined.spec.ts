import test from 'ava';

import { isTypeUndefined } from '../src/isTypeUndefined';
import { isUndefined } from '../src/isUndefined';

test('Should return true for undefined', (t) => {
	t.is(isTypeUndefined(undefined), true);
	t.is(isUndefined(undefined), true);
});

test('Should return false for anything else', (t) => {
	t.is(isUndefined([] as unknown), false);
	t.is(isUndefined(1 as unknown), false);
	t.is(isUndefined(false as unknown), false);
	t.is(isUndefined('undefined' as unknown), false);
	t.is(isUndefined(null as unknown), false);
	t.is(isUndefined({} as unknown), false);
	t.is(isUndefined(Symbol() as unknown), false);

	t.is(isTypeUndefined([] as unknown), false);
	t.is(isTypeUndefined(1 as unknown), false);
	t.is(isTypeUndefined(false as unknown), false);
	t.is(isTypeUndefined('undefined' as unknown), false);
	t.is(isTypeUndefined(null as unknown), false);
	t.is(isTypeUndefined({} as unknown), false);
	t.is(isTypeUndefined(Symbol() as unknown), false);
});
