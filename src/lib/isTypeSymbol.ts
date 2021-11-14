import { matchType } from './matchType';

/**
 * A Type Guard to check if given value type is equal to "string"
 *
 * @category  Type Guard
 */
const isTypeSymbol = matchType('symbol');

export { isTypeSymbol };
