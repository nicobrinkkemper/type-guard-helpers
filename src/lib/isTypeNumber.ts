import { matchType } from './matchType';

/**
 * @category | Type Guard
 * @example
 * ```ts
 *
 * import { isNumber } from 'type-guard-helpers'
 * const test = 1 as unknown;
 * if (isNumber(test)) {
 *    test + 3;
 * }
 * ```
 */
const isTypeNumber = matchType('number');

export { isTypeNumber };
