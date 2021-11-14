import type { AnyTypeGuard, GuardType } from './types';

/**
 * Given one or multiple Type Guards as array, returns a Type Guard to check if a value matches at least one of the given Type Guard(s).
 * Same as {@link isEither}, but accepts a single array instead of multiple arguments
 *
 * @example
 * ```ts
 * import { isNull, isString, isEitherIn } from 'type-guard-helpers';
 * const isStringOrNull = isEitherIn([isNull, isString]);
 * const test = {} as unknown;
 * if (isStringOrNull(test)) {
 *   test; // string || null
 * }
 * ```
 * @category Type Guard Composer
 */
const guardEitherIn =
	<Guards extends readonly AnyTypeGuard[]>(guards: Guards) =>
	(val: unknown): val is GuardType<Guards[number]> =>
		guards.findIndex((guard) => guard(val)) !== -1;

export { guardEitherIn };
