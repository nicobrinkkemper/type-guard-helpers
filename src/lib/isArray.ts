import type { TypeGuard } from './types';

/**
 * A Type Guard that checks if the given value is an array
 *
 * @category Type Guard
 */
const isArray: TypeGuard<unknown, readonly unknown[]> = Array.isArray;

export { isArray };
