import { isArray } from './isArray';

/**
 * Enhances a Type Guard so it allows a empty array
 * @example ```ts
 * const isFoo = (value:unknown):value is 'foo'=>value === 'foo')
 * const isFooOrEmptyArray = maybeEmptyArray(isFoo);
 * const test = 'foo' as unknown;
 * if (isFooOrEmptyArray(test)) {
 *                  test; // hover will show: "foo" | readonly []
 * }
 * ```
 */
const maybeEmptyArray =
  <GUARD extends AnyGuardType>(guard: GUARD) =>
  (value: unknown): value is GuardType<GUARD> | readonly [] =>
    (isArray(value) && value.length === 0) || guard(value);

export { maybeEmptyArray };
