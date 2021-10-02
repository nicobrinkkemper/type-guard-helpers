import { isNull } from './isNull';
import { AnyGuardType, GuardType } from './types';
/**
 * Enhances a Type Guard so it allows a null value
 * @example ```ts
 * const isArrayOrNull = maybeNull(Array.isArray);
 * const response = ['hi'] as unknown;
 * if (isArrayOrNull(response)) {
 *              response; // when hovered any[] | null, "any[]" because of native Array.isArray implementation
 * }
 * ```
 */
const maybeNull =
  <GUARD extends AnyGuardType>(guard: GUARD) =>
  (val: unknown): val is GuardType<GUARD> | null =>
    isNull(val) || guard(val);

export { maybeNull };
