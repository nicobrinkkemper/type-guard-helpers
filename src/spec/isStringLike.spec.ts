import test from 'ava';

import { isStringLike } from '../lib/isStringLike';

const isBar = isStringLike('bar');
const isFoo = isStringLike('foo');
const isFooOrBar = isStringLike('foo', 'bar');

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
