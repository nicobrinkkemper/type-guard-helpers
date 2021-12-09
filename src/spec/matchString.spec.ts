import test from 'ava';

import { match } from '../lib/match';
import { matches } from '../lib/matches';

const isBar = match('bar');
const isFoo = match('foo');
const isFooOrBar = matches('foo', 'bar');

test('Should return true for bar', (t) => {
	t.is(isBar('bar'), true);
	t.is(isBar('foo'), false);
});

test('Should return true for foo', (t) => {
	t.is(isFoo('bar'), false);
	t.is(isFoo('foo'), true);
});

test('Should return true for foo or bar', (t) => {
	t.is(isFooOrBar('bar'), true);
	t.is(isFooOrBar('foo'), true);
});
