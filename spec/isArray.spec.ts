import test from 'ava';

import { isArray } from '../src/isArray';

test('Should return true for an array', (t) => {
	t.is(isArray([]), true);
});

test('Should return false for anything else', (t) => {
	t.is(isArray(''), false);
	t.is(isArray(1), false);
	t.is(isArray(true), false);
	t.is(isArray({}), false);
	t.is(isArray(Symbol()), false);
});
