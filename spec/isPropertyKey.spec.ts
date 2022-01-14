import test from 'ava';

import { isPropertyKey } from '../src/isPropertyKey';

test('Should return true for number, string or symbol', (t) => {
	t.is(isPropertyKey(1), true);
	t.is(isPropertyKey('string'), true);
	t.is(isPropertyKey(Symbol('a')), true);
	t.is(isPropertyKey([] as unknown), false);
	t.is(isPropertyKey({}), false);
});
