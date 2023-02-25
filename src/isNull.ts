import { match } from './match';
import type { TypeGuardFn } from './types';

/**
 * A Type Guard that checks if the given value is equal to null
 *
 * @category Type Guard
 */
const isNull = match(null) as TypeGuardFn<unknown, null>; // null does not need to match a primitive

export { isNull };
