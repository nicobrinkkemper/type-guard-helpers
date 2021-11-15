import test from 'ava';

import { guardAll, matchType } from '../lib/';

const isFoo = guardAll(matchType('string'), (val): val is `foo${string}` =>
	val.startsWith('foo')
);

test('Should return true for things that start with foo', (t) => {
	t.is(isFoo('fooBath'), true);
	t.is(isFoo('fooDrink'), true);
});

test('Should return false for anything else', (t) => {
	t.is(isFoo(['oo']), false);
	t.is(isFoo('bar'), false);
});
