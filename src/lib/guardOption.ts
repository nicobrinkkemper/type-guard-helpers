import type { TypeGuard } from './types';

/**
 * Given two Type Guards as arguments, returns a Type Guard to check if the given value matches at least one of the given Type Guards.
 * Same as {@link guardEither}, but always requires exactly two guards.
 *
 * @example
 * ```ts
 * import { isNull, matchString, guardOption } from 'type-guard-helpers';
 * const isStringOrNull = guardOption(isNull, isString);
 * const test = {} as unknown;
 * if (isStringOrNull(test)) {
 *   test; // string || null
 * }
 * ```
 * @category Type Guard Composer
 */
const guardOption =
	<A, B>(guard1: TypeGuard<unknown, A>, guard2: TypeGuard<unknown, B>) =>
	<Value, Predicate = A | B>(
		value: Value
	): value is Predicate extends Value ? Predicate : never =>
		guard1(value) || guard2(value);

export { guardOption };
