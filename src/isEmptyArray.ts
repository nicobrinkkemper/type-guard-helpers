import type { TypeGuardFn } from './types';

/**
 * A Type Guard that checks if the given value is a zero length array
 *
 * @category Type Guard
 */
const isEmptyArray: TypeGuardFn<unknown, never[]> = (value): value is never =>
  Array.isArray(value) && value.length === 0;

export { isEmptyArray };
