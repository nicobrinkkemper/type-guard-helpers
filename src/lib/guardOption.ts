import type { AnyTypeGuard, GuardType } from './types';

/**
 * Given two Type Guards as arguments, returns a Type Guard to check if the given value matches at least one of the given Type Guards.
 * Same as {@link isEither}, but always requires exactly two guards.
 *
 * @example
 * ```ts
 * import { isNull, isString, guardOption } from 'type-guard-helpers';
 * const isStringOrNull = guardOption(isNull, isString);
 * const test = {} as unknown;
 * if (isStringOrNull(test)) {
 *   test; // string || null
 * }
 * ```
 * @category | Type Guard Composer
 */
const guardOption =
	<LeftGuard extends AnyTypeGuard, RightGuard extends AnyTypeGuard>(
		leftGuard: LeftGuard,
		rightGuard: RightGuard
	) =>
	(value: unknown): value is GuardType<LeftGuard> | GuardType<RightGuard> =>
		leftGuard(value) || rightGuard(value);

export { guardOption };
