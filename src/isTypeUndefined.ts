import { matchType } from './matchType';

/**
 * A Type Guard to check if given value type is equal to "undefined"
 *
 * @example
 * ```ts
 * import { isTypeUndefined } from 'type-guard-helpers'
 *
 * const test = 'foobar' as unknown;
 * if (isTypeUndefined(test)) {
 *    test; // undefined
 * }
 * ```
 * @category Type Guard
 */
const isTypeUndefined = matchType('undefined');

export { isTypeUndefined };
