import test from 'ava';

import { guardOption } from '../src/guardOption';
import { isTypeString } from '../src/isTypeString';
import { isTypeUndefined } from '../src/isTypeUndefined';

const isStringOrUndefined = guardOption(isTypeUndefined, isTypeString);

test('Should return true for a string or undefined', (t) => {
	t.is(isStringOrUndefined(''), true);
	t.is(isStringOrUndefined(undefined), true);
});

test('Should return false for anything else', (t) => {
	t.is(isStringOrUndefined([] as unknown), false);
	t.is(isStringOrUndefined(1 as unknown), false);
	t.is(isStringOrUndefined(true as unknown), false);
	t.is(isStringOrUndefined({}), false);
	t.is(isStringOrUndefined(Symbol() as unknown), false);
});
