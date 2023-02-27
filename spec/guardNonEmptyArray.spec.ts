import test from 'ava';

import type { TypeGuardFn } from '../src';
import {
  guardEither,
  guardNonEmptyArray,
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
const guardList = guardNonEmptyArray(((arr) => isList(arr)) as TypeGuardFn<
  readonly [unknown, ...unknown[]],
  readonly [string | number, ...(string | number)[]][]
>);
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

test('Should return true for non empty lists with numbers and strings', (t) => {
  t.is(guardList(['']), true);
  t.is(guardList([1, 'true']), true);
});

test('Should return false  empty lists or lists without numbers and strings', (t) => {
  t.is(guardList('1' as never as unknown[]), false);
  t.is(guardList([null]), false);
  t.is(guardList([false]), false);
  t.is(guardList([undefined]), false);
  t.is(guardList([]), false);
  t.is(guardList({} as never), false);
  t.is(guardList(Symbol() as never as unknown[]), false);
});
