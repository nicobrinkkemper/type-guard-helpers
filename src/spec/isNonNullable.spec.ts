import test from 'ava';

import { isNonNullable } from '../lib/isNonNullable';

test('Should return false for null and undefined', (t) => {
	t.is(isNonNullable(null), false);
	t.is(isNonNullable(undefined), false);
});
test('Should return true for anything else', (t) => {
	t.is(isNonNullable(false as unknown), true);
	t.is(isNonNullable(true as unknown), true);
	t.is(isNonNullable([] as unknown), true);
	t.is(isNonNullable({} as unknown), true);
	t.is(isNonNullable('1' as unknown), true);
	t.is(isNonNullable('true' as unknown), true);
	t.is(isNonNullable('false' as unknown), true);
	t.is(isNonNullable('null' as unknown), true);
	t.is(isNonNullable('' as unknown), true);
	t.is(isNonNullable(Symbol(1) as unknown), true);
});
