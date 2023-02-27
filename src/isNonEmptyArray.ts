import { isArray } from './isArray';
import type { TypeGuardFn } from './types';

/**
 * A Type Guard that checks if the given value is an array of non-zero length.
 *
 * @category Type Guard
 */
const isNonEmptyArray: TypeGuardFn<
  unknown,
  readonly [unknown, ...unknown[]]
> = (value): value is never => isArray(value) && value.length > 0;

export { isNonEmptyArray };
