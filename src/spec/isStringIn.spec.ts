import test from 'ava';

import { matchStringIn } from '../lib/matchStringIn';

const isFooOrBar = matchStringIn(['foo', 'bar'] as const);
test('Should return true for either foo or bar', (t) => {
	t.is(isFooOrBar('foo'), true);
	t.is(isFooOrBar('bar'), true);
});

test("Should return false because it's neither foo or bar", (t) => {
	t.is(isFooOrBar('BAR'), false);
	t.is(isFooOrBar(1), false);
});
