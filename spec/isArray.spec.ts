import test from 'ava';

import { isArray } from '../src/isArray';
import { isEmptyArray } from '../src/isEmptyArray';
import { isNonEmptyArray } from '../src/isNonEmptyArray';

test('Should return true for an array', (t) => {
  t.is(isArray([]), true);
});

test('Should return false for anything else', (t) => {
  t.is(isArray('' as unknown), false);
  t.is(isArray(1 as unknown), false);
  t.is(isArray(true as unknown), false);
  t.is(isArray({}), false);
  t.is(isArray(Symbol() as unknown), false);
});

test('Should return true for an array for isEmptyArray', (t) => {
  t.is(isEmptyArray([]), true);
});
test('Should return false for filled array for isEmptyArray', (t) => {
  t.is(isEmptyArray(['a']), false);
});

test('Should return false for an array for isNonEmptyArray', (t) => {
  t.is(isNonEmptyArray([]), false);
});

test('Should return true for filled array for isNonEmptyArray', (t) => {
  t.is(isNonEmptyArray(['a']), true);
});
