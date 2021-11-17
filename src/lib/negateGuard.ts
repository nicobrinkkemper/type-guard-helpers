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
const negateGuard: NegateGuardFn =
	(guard) =>
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	<Value>(value: Value, ...args: readonly unknown[]): value is any =>
		!guard(value, ...args);

type NegateGuardFn = <Guard extends AnyTypeGuard>(
	guard: Guard
) => <Value, Predicate = Exclude<Value, GuardType<Guard>>>(
	value: Value
) => value is Predicate extends Value ? Predicate : never;

export { negateGuard };
