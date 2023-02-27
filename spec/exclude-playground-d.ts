import { expectType } from 'tsd';

import {
  excludeGuard,
  excludeUndefined,
  isNullable,
  isUndefined,
  negateGuard
} from '../src';

const noUndefinedGuards = excludeUndefined(['a', undefined, 'b'] as const);
expectType<readonly ['a', 'b']>(noUndefinedGuards);

const noUndefined = excludeGuard(isUndefined);
const resultConst = noUndefined(['1', undefined, '2', '3', null] as const);
if (resultConst) {
  expectType<readonly ['1', '2', '3', null]>(resultConst);
}

const noNill = excludeGuard(isNullable);
const noNillResult = noNill(['1', undefined, '2', '3', null]);
if (noNillResult) {
  expectType<readonly [string, string, string]>(noNillResult);
}

// fixing output
const isNotUndefined = negateGuard(isUndefined);
const onlyUndefinedInput = ['1', undefined, '2', '3', null] as const;
const onlyUndefined = excludeGuard(
  // bind the type to the guard, so that Exclude can work
  isNotUndefined as typeof isNotUndefined<(typeof onlyUndefinedInput)[number]>
);
const onlyUndefinedResult = onlyUndefined(onlyUndefinedInput);
if (onlyUndefinedResult) {
  expectType<readonly [undefined]>(onlyUndefinedResult);
}

// Excluding nullable
const onlyDefined = excludeGuard(isNullable);
const onlyDefinedResult = onlyDefined([
  '1',
  undefined,
  '2',
  '3',
  null
] as const);
if (onlyDefinedResult) {
  expectType<readonly ['1', '2', '3']>(onlyDefinedResult);
}
