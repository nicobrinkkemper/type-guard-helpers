import test from 'ava';

import { matches } from '../lib/matches';

const isFooOrBar = matches('foo', 'bar', 'FOO', 'BAR');

test('Should return true for bar', (t) => {
	t.is(isFooOrBar('bar'), true);
	t.is(isFooOrBar('BAR'), true);
});

test('Should return true for foo', (t) => {
	t.is(isFooOrBar('foo'), true);
	t.is(isFooOrBar('FOO'), true);
});

test('Should return false for anything else', (t) => {
	const TestBar = 'BaR' as unknown;
	const TestFoo = 'FoO' as unknown;
	t.is(isFooOrBar(TestBar), false);
	t.is(isFooOrBar(TestFoo), false);
});
