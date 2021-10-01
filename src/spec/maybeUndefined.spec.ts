import test from 'ava';

import { isString } from '../lib/isString';
import { maybeUndefined } from '../lib/maybeUndefined';

const isStringOrUndefined = maybeUndefined(isString);
test('Should return true for a string or undefined', (t) => {
  t.is(isStringOrUndefined(''), true);
  t.is(isStringOrUndefined(undefined), true);
});

test('Should return false for anything else', (t) => {
  t.is(isStringOrUndefined([]), false);
  t.is(isStringOrUndefined(1), false);
  t.is(isStringOrUndefined(true), false);
  t.is(isStringOrUndefined({}), false);
  t.is(isStringOrUndefined(Symbol()), false);
});
