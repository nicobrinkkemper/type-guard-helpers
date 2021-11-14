import { matchType } from './matchType';

/**
 * A Type Guard to check if given value type is equal to "object"
 *
 * If you don't want to allow null, which is also considered a object type, use {@linkcode isRecord} instead.
 *
 * @example
 * ```ts
 * import { isObject, isNull } from 'type-guard-helpers'
 * const test = {} as unknown;
 * if (isObject(test) && test !== null) {
 *    test[1];
 *    test.test;
 * }
 * ```
 * @category Type Guard
 */
const isTypeObject = matchType('object');

export { isTypeObject };
