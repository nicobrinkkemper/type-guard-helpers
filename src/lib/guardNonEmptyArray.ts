import { isNonEmptyArray } from './isNonEmptyArray';
import type { AnyTypeGuard, GuardType } from './types';

/**
 * Enhances a Type Guard so it can be used to check all values of an array.
 *
 * @param guard A Type Guard for valid array values
 * @returns A new Type Guard that takes an array and passes if all its values pass the given guard.
 * @example
 * ```ts
 * import { matchString, guardNonEmptyArray } from 'type-guard-helpers';
 * const test = [] as unknown
 * const isStringArray = guardNonEmptyArray(isString)
 * if(isStringArray(test)){
 *    test; // test: readonly [string, ...string[]]
 * }
 * ```
 * @category Type Guard Creator
 */
const guardNonEmptyArray =
	<Guard extends AnyTypeGuard<readonly [unknown, ...(readonly unknown[])]>>(
		guard: Guard
	) =>
	(
		value: unknown
	): value is readonly [GuardType<Guard>, ...ReadonlyArray<GuardType<Guard>>] =>
		isNonEmptyArray(value) && guard(value);

export { guardNonEmptyArray };
