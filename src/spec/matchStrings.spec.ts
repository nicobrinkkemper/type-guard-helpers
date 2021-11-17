import test from 'ava';

import { matchStrings } from '../lib/matchStrings';

const isFooOrBar = matchStrings('foo', 'bar', 'FOO', 'BAR');

test('Should return true for bar', (t) => {
	t.is(isFooOrBar('bar'), true);
	t.is(isFooOrBar('BAR'), true);
});

test('Should return true for foo', (t) => {
	t.is(isFooOrBar('foo'), true);
	t.is(isFooOrBar('FOO'), true);
});

test('Should return false for anything else', (t) => {
	t.is(isFooOrBar('BaR'), false);
	t.is(isFooOrBar('FoO'), false);
});
