import test from 'ava';

import { guardArrayValues } from '../src/guardArrayValues';
import { guardBoth } from '../src/guardBoth';
import { matchType } from '../src/matchType';

const isString = matchType('string');
test('Should return true for string', (t) => {
	t.is(isString('fooBath'), true);
});

const startsWithFoo = guardBoth(isString, (val): val is `foo${string}` => {
	return !!val.startsWith('foo');
});

const isFooArray = guardArrayValues(startsWithFoo);

test('Should return true for things that start with foo', (t) => {
	t.is(startsWithFoo('fooBath'), true);
	t.is(startsWithFoo('fooDrink'), true);
	t.is(isFooArray(['fooA', 'fooB', 'fooC']), true);
});

test('Should return false for anything else', (t) => {
	t.is(isFooArray(['barf'] as unknown), false);
	t.is(startsWithFoo(['oo'] as unknown), false);
	t.is(startsWithFoo('bar'), false);
});
