import { matchBoolean } from './matchBoolean';

/**
 * A Type Guard that checks if the given value is equal to false
 *
 * @category Type Guard
 */
const isFalse = matchBoolean(false);

export { isFalse };
