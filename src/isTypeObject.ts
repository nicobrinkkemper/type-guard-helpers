import { matchType } from './matchType';

/**
 * A Type Guard to check if given value type is equal to "object"
 *
 * If you don't want to allow null, which is also considered an object type, use {@linkcode isRecord} or {@linkcode isObject} instead.
 *
 * @example
 * ```ts
 * import { isTypeObject, isNull } from 'type-guard-helpers'
 * const test = {} as unknown;
 * if (isTypeObject(test) && test !== null) {
 *    test[1];
 *    test.test;
 * }
 * // equivalent to `isObject`
 * ```
 * @category Type Guard
 */
const isTypeObject = matchType('object');

export { isTypeObject };
