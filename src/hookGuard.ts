import type { AnyTypeGuard } from './types';

type HookGuard = <Guard extends AnyTypeGuard>(
  guard: Guard,
  before?: (beforeResult: {
    readonly value: unknown;
    readonly guard: Guard;
  }) => unknown,
  after?: (afterResult: {
    readonly value: unknown;
    readonly guard: Guard;
    readonly result: boolean;
  }) => unknown
) => Guard;

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
 * const isNullWithLog = hookGuard(isNull, before, after)
 * ```
 * @category Type Guard Debugger
 */
const hookGuard: HookGuard = (guard, before?, after?) =>
  ((value: unknown, ...args: unknown[]) => {
    if (before) before({ value, guard });
    const result = guard(value, ...args);
    if (after) after({ value, guard, result });
    return result;
  }) as typeof guard;

export { hookGuard };
export type { HookGuard };