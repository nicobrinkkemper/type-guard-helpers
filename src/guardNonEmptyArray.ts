import { guardBoth } from './guardBoth';
import { isNonEmptyArray } from './isNonEmptyArray';
import type { AnyTypeGuard } from './types';

/**
 * Enhances a Type Guard so it can be used to check all values of an array. It also checks if the array is non-empty.
 *
 * @param guard A Type Guard for valid array values
 * @returns A new Type Guard that takes an array
 * @example
 * ```ts
 * import { isString, guardNonEmptyArray } from 'type-guard-helpers';
 * const test = [] as unknown
 * const isStringArray = guardNonEmptyArray((val): val is readonly [string, ...unknown[]] => isString(val[0]))
 * if(isStringArray(test)){
 *    test; // test: readonly [string, ...unknown[]]
 * }
 * ```
 * @category | Type Guard Creator
 */
const guardNonEmptyArray = <Guard extends AnyTypeGuard>(guard: Guard) =>
  guardBoth(isNonEmptyArray, guard);
export { guardNonEmptyArray };
