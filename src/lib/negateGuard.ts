import type { AnyTypeGuard, GuardType } from './types';

/**
 * Negates the output of any given Type Guard and types accordingly using Exclude.
 * @example
 * ```ts
 * import { negateGuard, isNull } from 'type-guard-helpers'
 * const test = [] as string | null;
 * if (negateGuard(isNull, test)) {
 *   test; // string
 * }
 * ```
 * @category Type Guard Composer
 */
const negateGuard =
	<Guard extends AnyTypeGuard>(guard: Guard) =>
	<Value>(value: Value): value is Exclude<Value, GuardType<Guard>> =>
		!guard(value);

export { negateGuard };
