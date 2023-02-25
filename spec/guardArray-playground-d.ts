import { expectType } from 'tsd';

import { guardNonEmptyArray } from './guardNonEmptyArray';

const isStringArr = guardNonEmptyArray(
  (val): val is readonly [string, ...unknown[]] => typeof val[0] === 'string'
);
const testArr = ['a', 'b', 'c'] as unknown;
if (isStringArr(testArr)) {
  expectType<readonly [string, ...unknown[]]>(testArr);
}
