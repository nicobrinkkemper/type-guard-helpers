import test from 'ava';

import { isNullable } from '../lib/isNullable';

test('Should return true for null and undefined', (t) => {
	t.is(isNullable(null), true);
	t.is(isNullable(undefined), true);
});
test('Should return false for anything else', (t) => {
	t.is(isNullable(false as unknown), false);
	t.is(isNullable(true as unknown), false);
	t.is(isNullable([] as unknown), false);
	t.is(isNullable({} as unknown), false);
	t.is(isNullable('1' as unknown), false);
	t.is(isNullable('true' as unknown), false);
	t.is(isNullable('false' as unknown), false);
	t.is(isNullable('null' as unknown), false);
	t.is(isNullable('' as unknown), false);
	t.is(isNullable(Symbol(1) as unknown), false);
});
