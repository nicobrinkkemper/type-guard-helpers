import { matchTypeIn } from './matchTypeIn';

/**
 * A Type Guard to check if given value type is equal to "string", "number" or "symbol"
 *
 * @category | Type Guard
 */
const isPropertyKey = matchTypeIn(['string', 'number', 'symbol']);

export { isPropertyKey };
