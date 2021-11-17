import type { AnyTypeGuard } from './types';

/**
 * Given a Type Guard, returns a Type Guard that does exactly the same
 * Mirrors any given guard regardless of their implementation, including `negateGuard`
 *
 * @example
 * ```ts
 * import { hookGuard, isNull } from 'type-guard-helpers'
 * const test = {} as string | null;
 * if (hookGuard(isNull, console.info, console.info)(test)) {
 *   test; // isNull
 * }
 * // hooking to log
 * const before = (value: unknown, guard: unknown) => console.info(`Calling:`, { guard, value })
 * const after = (result: unknown) => console.info(`Result:`, { result })
 * const hookLog = hookGuard(isNull, before, after)
 * ```
 * @category Type Guard Debugger
 */
const hookGuard = <Guard extends AnyTypeGuard>(
	guard: Guard,
	before?: (beforeResult: {
		readonly value: unknown;
		readonly guard: AnyTypeGuard;
	}) => unknown,
	after?: (afterResult: {
		readonly value: unknown;
		readonly guard: AnyTypeGuard;
		readonly result: boolean;
	}) => unknown
): Guard =>
	((value: unknown, ...args: readonly unknown[]): value is unknown => {
		if (before) before({ value, guard });
		const result = guard(value, ...args);
		if (after) after({ value, guard, result });
		return result;
	}) as unknown as Guard; // Mirror any given guard regardless of their implementation

export { hookGuard };
