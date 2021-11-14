import { matchType } from './matchType';

/**
 * A Type Guard that will check if the given value is a boolean
 *
 * @category  Type Guard
 */
const isTypeBoolean = matchType('boolean');
export { isTypeBoolean };
