import { isArray } from './isArray';
import type { TypeGuardFn } from './types';

/**
 * A Type Guard that checks if the given value is an array of non-zero length.
 *
 * @category Type Guard
 */
const isNonEmptyArray = ((value: readonly unknown[]) =>
  isArray(value) && value.length > 0) as TypeGuardFn<
  unknown,
  readonly [unknown, ...unknown[]]
>;

export { isNonEmptyArray };
