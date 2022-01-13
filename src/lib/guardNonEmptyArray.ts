import { guardArray } from './guardArray';
import { isNonEmptyArray } from './isNonEmptyArray';

import type { TypeGuard } from '.';

/**
 * Enhances a Type Guard so it can be used to check all values of an array.
 *
 * @param guard A Type Guard for valid array values
 * @returns A new Type Guard that takes an array and passes if all its values pass the given guard.
 * @example
 * ```ts
 * import { isString, guardNonEmptyArray } from 'type-guard-helpers';
 * const test = [] as unknown
 * const isStringArray = guardNonEmptyArray(isString)
 * if(isStringArray(test)){
 *    test; // test: readonly [string, ...string[]]
 * }
 * ```
 * @category | Type Guard Creator
 */
const guardNonEmptyArray = <Param extends readonly unknown[], A>(
	guard: TypeGuard<readonly [...Param], A>
) => {
	const isValid = guardArray(guard);
	return <Value extends readonly [...Param]>(
		value: Value
	): value is A extends Value ? A : never =>
		isNonEmptyArray(value) && isValid(value);
};

export { guardNonEmptyArray };
