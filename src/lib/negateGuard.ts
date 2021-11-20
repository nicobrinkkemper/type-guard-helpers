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
const negateGuard: NegateGuardFn =
	(guard) =>
	(value: unknown, ...args: readonly unknown[]): value is never =>
		!guard(value, ...args);

type NegateGuardFn = <A>(
	guard: AnyTypeGuard<unknown, A>
) => <Value, Result extends Exclude<Value, A>>(
	value: Value
) => value is Result extends Value ? Result : never;

export { negateGuard };
