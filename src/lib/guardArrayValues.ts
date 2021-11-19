import { isArray } from './isArray';
import { negateGuard } from './negateGuard';
import type { IterableTypeGuard } from './types';

/**
 * Given a Type Guard, returns a Type Guard that checks if the given value is an array and if all its values match the given Type Guard.
 *
 * @example
 * ```ts
 * import { guardArrayValues } from 'type-guard-helpers';
 *
 * const isStringArray = guardArrayValues(
 * 	(value): value is string =>
 * 		typeof value !== 'string'
 * );
 *
 * const test = {} as unknown;
 * if (isStringArray(test)) {
 * 	  test; // test: readonly string[]
 * }
 * ```
 * @category Type Guard Composer
 */
const guardArrayValues =
	<A, Result extends readonly A[]>(guard: IterableTypeGuard<unknown, A>) =>
	<Value, Predicate extends Result extends Value ? Result : never>(
		value: Result extends Value ? Value : Result
	): value is Predicate =>
		isArray(value) && value.findIndex(negateGuard(guard)) === -1;

export { guardArrayValues };
