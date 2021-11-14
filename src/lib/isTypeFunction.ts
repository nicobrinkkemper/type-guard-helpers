import { matchType } from './matchType';

/**
 * A Type Guard that will check if the given value is a function
 *
 * @category  Type Guard
 */
const isTypeFunction = matchType('function');

export { isTypeFunction };
