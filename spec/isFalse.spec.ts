import test from 'ava';

import { isFalse } from '../src/isFalse';

test('Should return true for false', (t) => {
	t.is(isFalse(false), true);
});
test('Should return false for anything else', (t) => {
	t.is(isFalse(true), false);
	t.is(isFalse([] as unknown), false);
	t.is(isFalse({} as unknown), false);
	t.is(isFalse('1' as unknown), false);
	t.is(isFalse('true' as unknown), false);
	t.is(isFalse('false' as unknown), false);
	t.is(isFalse(Symbol(1) as unknown), false);
});
