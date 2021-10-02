import { isNull } from './isNull';
import { AnyGuardType, GuardType } from './types';
/**
 * Enhances a Type Guard so it allows a null value
 * @example ```ts
 * import { maybeNull, isArray } from 'type-guard-helpers'
 * const response = ['hi'] as unknown;
 * const isArrayOrNull = maybeNull(isArray);
 * if (isArrayOrNull(response)) {
 *              response; // readonly unknown[] | null
 * }
 * ```
 */
const maybeNull =
  <GUARD extends AnyGuardType>(guard: GUARD) =>
  (val: unknown): val is GuardType<GUARD> | null =>
    isNull(val) || guard(val);

export { maybeNull };
