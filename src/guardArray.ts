import { guardPipe } from './guardPipe';
import { isArray } from './isArray';
import type { AnyTypeGuard } from './types';

type GuardArray = <Guard extends AnyTypeGuard<readonly unknown[]>>(
  guard: Guard
) => ReturnType<typeof guardPipe<typeof isArray, Guard>>;

/**
 * Given a Type Guard, returns a Type Guard that checks if the given value is an array and matches the given Type Guard.
 *
 * @example
 * ```ts
 * import { guardArray } from 'type-guard-helpers';
 *
 * const isStringArray = guardArray(
 * 	(value): value is readonly string[] =>
 * 		value.findIndex((item) => typeof item !== 'string') === -1
 * );
 *
 * const test = {} as unknown;
 * if (isStringArray(test)) {
 * 	  test; // test: readonly string[]
 * }
 * ```
 * @category Type Guard Composer
 */
const guardArray: GuardArray = (guard) => guardPipe(isArray, guard);

export { guardArray };
export type { GuardArray };
