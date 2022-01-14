import type { AnyTypeGuard } from './types';
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
	<Param, Result>(guard: AnyTypeGuard<Param, Result>) =>
	<Value extends Param>(
		value: Value,
		...args: readonly unknown[]
	): value is Exclude<Value, Result> =>
		!guard(value, ...args);

export { negateGuard };
