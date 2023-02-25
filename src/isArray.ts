import type { TypeGuardFn } from './types';

/**
 * A Type Guard that checks if the given value is an array
 *
 * @category Type Guard
 */
const isArray = Array.isArray as TypeGuardFn<unknown, readonly unknown[]>;

export { isArray };
