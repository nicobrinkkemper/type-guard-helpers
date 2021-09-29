import { isUndefined } from './isUndefined';

/**
 * Enhances a type-guard so it allows a undefined value
 * @example ```ts
 * const isArrayOrUndefined = maybeUndefined(Array.isArray);
 * const response = ['hi'] as unknown;
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
