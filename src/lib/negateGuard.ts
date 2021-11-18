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
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	(value: unknown, ...args: readonly unknown[]): value is any =>
		!guard(value, ...args);

type NegateGuardFn = <A>(
	guard: AnyTypeGuard<unknown, A>
) => <Value>(
	value: Value
) => value is Exclude<Value, A> extends Value ? Exclude<Value, A> : never;

export { negateGuard };
