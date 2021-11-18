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
	<A>(guard: IterableTypeGuard<unknown, A>) =>
	<Value, Predicate extends readonly A[]>(
		value: Value
	): value is Predicate extends Value ? Predicate : never =>
		isArray(value) && value.findIndex(negateGuard(guard)) === -1;

export { guardArrayValues };
