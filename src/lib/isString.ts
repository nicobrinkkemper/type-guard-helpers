/**
 * Type-guard for string values
 * @example ```ts
 * const test = 'foobar' as unknown;
 * if (isString(test)) {
 *                  test; // hover will show: string
 * }
 * ```
 */
const isString = (value: unknown): value is string => typeof value === 'string';
export { isString };
