import { expectType } from 'tsd';

import { guardNonEmptyArray } from './guardNonEmptyArray';

const isStringArr = guardNonEmptyArray(
	(val): val is readonly [string, ...(readonly string[])] =>
		typeof val[0] === 'string'
);
const testArr = ['a', 'b', 'c'] as unknown;
if (isStringArr(testArr)) {
	// eslint-disable-next-line functional/prefer-readonly-type
	expectType<readonly [string, ...string[]]>(testArr);
}
