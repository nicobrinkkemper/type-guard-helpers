import { match } from './match';

/**
 * A Type Guard that checks if the given value is equal to undefined
 *
 * @category Type Guard
 */
const isUndefined = match(undefined);

export { isUndefined };
