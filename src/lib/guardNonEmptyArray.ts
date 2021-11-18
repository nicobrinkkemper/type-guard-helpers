import { isNonEmptyArray } from './isNonEmptyArray';
import type { TypeGuard } from './types';

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
	<A>(guard: TypeGuard<readonly [unknown, ...ReadonlyArray<unknown>], A>) =>
	<Value, Predicate = readonly [A, ...ReadonlyArray<A>]>(
		value: Value
	): value is Predicate extends Value ? Predicate : never =>
		isNonEmptyArray(value) && guard(value);

export { guardNonEmptyArray };
