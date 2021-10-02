import { isArray } from './isArray';
import { AnyGuardType, GuardType } from './types';

/**
 * Enhances a Type Guard so it allows a empty array
 * @example ```ts
 * import { maybeEmptyArray, isStringLike } from 'type-guard-helpers'
 * const test = 'foo' as unknown;
 * const isFoo = isStringLike('foo')
 * const isFooOrEmptyArray = maybeEmptyArray(isFoo);
 * if (isFooOrEmptyArray(test)) {
 *                  test; // "foo" | readonly []
 * }
 * ```
 */
const maybeEmptyArray =
  <GUARD extends AnyGuardType>(guard: GUARD) =>
  (value: unknown): value is GuardType<GUARD> | readonly [] =>
    (isArray(value) && value.length === 0) || guard(value);

export { maybeEmptyArray };
