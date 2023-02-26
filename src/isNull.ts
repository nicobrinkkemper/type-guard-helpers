import { match } from './match';

/**
 * A Type Guard that checks if the given value is equal to null
 *
 * @category Type Guard
 */
const isNull = match(null); // null does not need to match a primitive

export { isNull };
