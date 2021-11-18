import type { TypeGuard } from './types';

/**
 * Given one or multiple Type Guards as array, returns a Type Guard to check if a value matches at least one of the given Type Guard(s).
 * Same as {@link guardEither}, but accepts a single array instead of multiple arguments
 *
 * @example
 * ```ts
 * import { isNull, matchString, isEitherIn } from 'type-guard-helpers';
 * const isStringOrNull = isEitherIn([isNull, isString]);
 * const test = {} as unknown;
 * if (isStringOrNull(test)) {
 *   test; // string || null
 * }
 * ```
 * @category Type Guard Composer
 */
const guardEitherIn =
	<A>(guards: readonly TypeGuard<unknown, A>[]) =>
	<Value>(val: Value): val is A extends Value ? A : never =>
		guards.findIndex((guard) => guard(val)) !== -1;

export { guardEitherIn };
