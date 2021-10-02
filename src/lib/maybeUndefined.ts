import { isUndefined } from './isUndefined';
import { AnyGuardType, GuardType } from './types';

/**
 * Enhances a Type Guard so it allows a undefined value
 * @example ```ts
 * import { maybeUndefined, isArray } from 'type-guard-helpers'
 * const response = ['hi'] as unknown;
 * const isArrayOrUndefined = maybeUndefined(isArray);
 * if (isArrayOrUndefined(response)) {
 *              response; // any[] | undefined
 * }
 * ```
 */
const maybeUndefined =
  <GUARD extends AnyGuardType>(guard: GUARD) =>
  (val: unknown): val is GuardType<GUARD> | undefined =>
    isUndefined(val) || guard(val);

export { maybeUndefined };
