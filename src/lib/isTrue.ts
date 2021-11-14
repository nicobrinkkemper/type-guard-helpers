import { matchBoolean } from './matchBoolean';

/**
 * A Type Guard that will check if the given value is equal to true
 *
 * @category | Type Guard
 */
const isTrue = matchBoolean(true);

export { isTrue };
