import test from 'ava';

import { guardEither } from '../src/guardEither';
import { isEmptyArray } from '../src/isEmptyArray';
import { isTypeString } from '../src/isTypeString';

const isEmptyArrayOrString = guardEither(isEmptyArray, isTypeString);
test('Should return true for a undefined or null', (t) => {
  t.is(isEmptyArrayOrString([]), true);
  t.is(isEmptyArrayOrString(''), true);
});

test('Should return false for anything else', (t) => {
  t.is(isEmptyArrayOrString(['fe']), false);
  t.is(isEmptyArrayOrString(1 as unknown), false);
  t.is(isEmptyArrayOrString([null]), false);
  t.is(isEmptyArrayOrString([undefined]), false);
  t.is(isEmptyArrayOrString(true as unknown), false);
  t.is(isEmptyArrayOrString({}), false);
  t.is(isEmptyArrayOrString(Symbol() as unknown), false);
  t.is(isEmptyArrayOrString(...([] as unknown as readonly [string])), false);
});
