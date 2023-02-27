import test from 'ava';

import {
  guardEither,
  guardNonEmptyArrayValues,
  isFalse,
  isNull,
  isTypeNumber,
  isTypeString,
  isUndefined
} from '../src';

const isList = guardNonEmptyArrayValues(
  guardEither(isTypeString, isTypeNumber)
);
const isFalsyList = guardNonEmptyArrayValues(
  guardEither(isUndefined, isNull, isFalse)
);
test('Should return true for non empty lists', (t) => {
  t.is(isList(['']), true);
  t.is(isList([1, 'true']), true);
  t.is(isFalsyList([null]), true);
  t.is(isFalsyList([false]), true);
  t.is(isFalsyList([undefined]), true);
});
test('Should return false for anything else', (t) => {
  t.is(isList('1' as never as unknown[]), false);
  t.is(isList([]), false);
  t.is(isList({} as never), false);
  t.is(isList(Symbol() as never as unknown[]), false);
});
