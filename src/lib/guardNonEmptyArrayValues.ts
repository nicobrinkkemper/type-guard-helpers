import { isNonEmptyArray } from './isNonEmptyArray';
import { negateGuard } from './negateGuard';
import type { AnyIterableTypeGuard, GuardType } from './types';

/**
 * Given a Type Guard, returns a Type Guard that checks if the given value is an array and if all its values match the given Type Guard.
 *
 * @example
 * ```ts
 * import { guardNonEmptyArray } from 'type-guard-helpers';
 *
 * const isStringArray = guardNonEmptyArray(
 * 	(value): value is string =>
 * 		typeof value !== 'string'
 * );
 *
 * const test = {} as unknown;
 * if (isStringArray(test)) {
 * 	  test; // test: readonly [string, ...string[]]
 * }
 * ```
 * @category Type Guard Composer
 */
const guardNonEmptyArrayValues =
	<Guard extends AnyIterableTypeGuard<unknown>>(guard: Guard) =>
	(
		value: unknown
	): value is readonly [GuardType<Guard>, ...ReadonlyArray<GuardType<Guard>>] =>
		isNonEmptyArray(value) && value.findIndex(negateGuard(guard)) === -1;

export { guardNonEmptyArrayValues };
