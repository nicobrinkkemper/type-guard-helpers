import test from 'ava';

import { excludeGuard, matchString } from '../src/';

const isBar = matchString('bar');
const isFoo = matchString('foo');
const excludeFoo = excludeGuard(isFoo);
const excludeBar = excludeGuard(isBar);

const barOnly = excludeFoo(['foo', 'bar', 'x', 'foo']);
const fooOnly = excludeBar(['foo', 'bar', 'x', 'foo']);

test('Should contain 2 foo elements', (t) => {
  t.is(fooOnly[0], 'foo');
  t.is(fooOnly[1], 'x');
  t.is(fooOnly[2], 'foo');
  t.is(fooOnly.length, 3);
});
test('Should contain 1 bar elements', (t) => {
  t.is(barOnly[0], 'bar');
  t.is(barOnly[1], 'x');
  t.is(barOnly.length, 2);
});
