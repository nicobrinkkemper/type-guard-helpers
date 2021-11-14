import test from 'ava';

import { matchString } from '../lib/matchString';
import { matchStrings } from '../lib/matchStrings';

const isBar = matchString('bar');
const isFoo = matchString('foo');
const isFooOrBar = matchStrings('foo', 'bar');

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
