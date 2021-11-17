import test from 'ava';

import { guardAll, guardEither, matchType } from '../lib/';

const isBar = guardEither(
	matchType('undefined'),
	guardAll(matchType('string'), (val): val is `bar${string}` =>
		val.startsWith('bar')
	)
);

test('Should return true for things that start with foo', (t) => {
	t.is(isBar('barBath'), true);
	t.is(isBar(undefined), true);
});

test('Should return false for anything else', (t) => {
	t.is(isBar(['oo']), false);
	t.is(isBar('foo'), false);
	t.is(isBar(null), false);
});
