import test from 'ava';

import { isTypeUndefined } from '../lib/isTypeUndefined';
import { isUndefined } from '../lib/isUndefined';

test('Should return true for undefined', (t) => {
	t.is(isTypeUndefined(undefined), true);
	t.is(isUndefined(undefined), true);
});

test('Should return false for anything else', (t) => {
	t.is(isUndefined([]), false);
	t.is(isUndefined(1), false);
	t.is(isUndefined(false), false);
	t.is(isUndefined('undefined'), false);
	t.is(isUndefined(null), false);
	t.is(isUndefined({}), false);
	t.is(isUndefined(Symbol()), false);

	t.is(isTypeUndefined([]), false);
	t.is(isTypeUndefined(1), false);
	t.is(isTypeUndefined(false), false);
	t.is(isTypeUndefined('undefined'), false);
	t.is(isTypeUndefined(null), false);
	t.is(isTypeUndefined({}), false);
	t.is(isTypeUndefined(Symbol()), false);
});
