import { match } from './match';

/**
 * A Type Guard that checks if the given value is equal to null
 *
 * @category Type Guard
 */
const isNull = match(null);

export { isNull };
