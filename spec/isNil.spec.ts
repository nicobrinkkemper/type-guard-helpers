import test from 'ava';

import { isNil } from '../src/isNil';

test('Should return true for null or undefined', (t) => {
	t.is(isNil(null), true);
	t.is(isNil(undefined), true);
});
test('Should return false for anything else', (t) => {
	t.is(isNil([] as unknown), false);
	t.is(isNil({} as unknown), false);
	t.is(isNil(true as unknown), false);
	t.is(isNil(false as unknown), false);
	t.is(isNil('few' as unknown), false);
	t.is(isNil(Symbol() as unknown), false);
});
