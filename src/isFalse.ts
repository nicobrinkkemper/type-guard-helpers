import { match } from './match';

/**
 * A Type Guard that checks if the given value is equal to false
 *
 * @category Type Guard
 */
const isFalse = match(false);

export { isFalse };
