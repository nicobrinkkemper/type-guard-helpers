/**
 * Type Guard for string values
 * @example ```ts
 * import { isString } from 'type-guard-helpers'
 * const test = 'foobar' as unknown;
 * if (isString(test)) {
 *                  test; // string
 * }
 * ```
 */
const isString = (value: unknown): value is string => typeof value === 'string';
export { isString };
