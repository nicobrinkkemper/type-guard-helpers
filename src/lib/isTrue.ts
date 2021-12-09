import { match } from './match';

/**
 * A Type Guard that checks if the given value is equal to true
 *
 * @category Type Guard
 */
const isTrue = match(true);

export { isTrue };
