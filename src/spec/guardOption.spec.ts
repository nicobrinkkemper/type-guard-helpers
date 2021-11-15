import test from 'ava';

import { guardOption } from '../lib/guardOption';
import { isEmptyArray } from '../lib/isEmptyArray';
import { isTypeString } from '../lib/isTypeString';

const isEmptyArrayOrString = guardOption(isEmptyArray, isTypeString);
test('Should return true for a undefined or null', (t) => {
	t.is(isEmptyArrayOrString([]), true);
	t.is(isEmptyArrayOrString(''), true);
});

test('Should return false for anything else', (t) => {
	t.is(isEmptyArrayOrString(['fe']), false);
	t.is(isEmptyArrayOrString(1), false);
	t.is(isEmptyArrayOrString([null]), false);
	t.is(isEmptyArrayOrString([undefined]), false);
	t.is(isEmptyArrayOrString(true), false);
	t.is(isEmptyArrayOrString({}), false);
	t.is(isEmptyArrayOrString(Symbol()), false);
	t.is(isEmptyArrayOrString(...([] as unknown as readonly [string])), false);
});
