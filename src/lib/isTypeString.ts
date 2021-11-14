import { matchType } from './matchType';

/**
 * A Type Guard to check if given value type is equal to "string"
 *
 * @example
 * ```ts
 *
 * import { isString } from 'type-guard-helpers'
 * const test = 'foobar' as unknown;
 * if (isString(test)) {
 *                  test; // string
 * }
 * ```
 * @category Type Guard
 */
const isTypeString = matchType('string');

export { isTypeString };
