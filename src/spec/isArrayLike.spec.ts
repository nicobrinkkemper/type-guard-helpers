import test from 'ava';

import { guardArray } from '../lib/guardArray';

test("Should return true because it's a list of tuple", (t) => {
	const isTuple = guardArray(Array.isArray);
	t.is(isTuple([[]]), true);
});
