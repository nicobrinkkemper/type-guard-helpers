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
	<A, B, Result extends A | B>(
		guard1: TypeGuard<unknown, A>,
		guard2: TypeGuard<unknown, B>
	) =>
	<Value, Predicate extends Result extends Value ? Result : never>(
		value: Result extends Value ? Value : Result
	): value is Predicate =>
		guard1(value as unknown) || guard2(value as unknown);

export { guardOption };
