import test from 'ava';

import { guardAll, hookGuard, matchType } from '../lib';
import { guardArrayValues } from '../lib/guardArrayValues';

const startsWithFoo = hookGuard(
	guardAll(matchType('string'), (val): val is `foo${string}` => {
		return !!val.startsWith('foo');
	}),
	console.log,
	console.log
);

const isFooArray = guardArrayValues(startsWithFoo);

test('Should return true for things that start with foo', (t) => {
	t.is(startsWithFoo('fooBath'), true);
	t.is(startsWithFoo('fooDrink'), true);
	t.is(isFooArray(['fooA', 'fooB', 'fooC']), true);
});

test('Should return false for anything else', (t) => {
	t.is(isFooArray(['barf']), false);
	t.is(startsWithFoo(['oo']), false);
	t.is(startsWithFoo('bar'), false);
});
