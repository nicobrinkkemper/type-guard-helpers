import test from 'ava';

import { guardOption } from '../lib/guardOption';
import { isNull } from '../lib/isNull';
import { isUndefined } from '../lib/isUndefined';

const isUndefinedOrNull = guardOption(isNull, isUndefined);

test('Should return true for a undefined or null', (t) => {
	t.is(isUndefinedOrNull(undefined), true);
	t.is(isUndefinedOrNull(null), true);
	t.is(
		isUndefinedOrNull(
			...([] as unknown as readonly [string] as readonly [unknown])
		),
		true
	);
});

test('Should return false for anything else', (t) => {
	t.is(isUndefinedOrNull([] as unknown), false);
	t.is(isUndefinedOrNull(1 as unknown), false);
	t.is(isUndefinedOrNull('' as unknown), false);
	t.is(isUndefinedOrNull(true as unknown), false);
	t.is(isUndefinedOrNull({} as unknown), false);
	t.is(isUndefinedOrNull(Symbol() as unknown), false);
});
