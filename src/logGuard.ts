import { hookGuard } from './hookGuard';
import type { AnyTypeGuard } from './types';

type LogGuard = <Guard extends AnyTypeGuard>(
  guard: Guard,
  before?: ({
    value,
    guard
  }: {
    readonly value: unknown;
    readonly guard: Guard;
    // eslint-disable-next-line functional/no-return-void
  }) => void,
  after?: ({
    result,
    value,
    guard
  }: {
    readonly result: boolean;
    readonly value: unknown;
    readonly guard: Guard;
    // eslint-disable-next-line functional/no-return-void
  }) => void
) => Guard;

/**
 * Given a Type Guard, returns a Type Guard that does exactly the same but logs the `guard`, `value` before calling guard(value). Logs result after.
 * Equivalent of {@linkcode hookGuard}, but uses `console.log` for the before and after hook by default.
 *
 * @example
 * ```ts
 * import { logGuard, isNull } from 'type-guard-helpers'
 * const test = {} as string | null;
 * if (logGuard(isNull)(test)) {
 *   test; // null
 * }
 * // hooking to log
 * const hookLog = hookGuard(
 * 		isNull,
 * 		({value, guard}) => console.info(`Calling:`, { guard, value }),
 * 		({result}) => console.info(`Result:`, { result })
 * );
 * ```
 * @category Type Guard Debugger
 */
const logGuard: LogGuard = (
  guard,
  before = ({ value, guard }) => {
    console.log({ value, guard });
  },
  after = ({ result, value, guard }) => {
    console.log({ result, value, guard });
  }
) => hookGuard(guard, before, after);

export { logGuard };
export type { LogGuard };
