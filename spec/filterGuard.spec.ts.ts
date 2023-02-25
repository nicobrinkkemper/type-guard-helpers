import test from 'ava';

import { filterGuard } from './filterGuard';
import { matchString } from './match';

const isBar = matchString('bar');
const isFoo = matchString('foo');
const filterFoo = filterGuard(isFoo);
const filterBar = filterGuard(isBar);

const fooOnly = filterFoo(['foo', 'bar', 'x', 'foo']);
const barOnly = filterBar(['foo', 'bar', 'x', 'foo']);
test('Should contain 2 foo elements', (t) => {
  t.is(fooOnly[0], 'foo');
  t.is(fooOnly[1], 'foo');
  t.is(fooOnly.length, 2);
});
test('Should contain 1 bar elements', (t) => {
  t.is(barOnly[0], 'bar');
  t.is(barOnly.length, 1);
});
