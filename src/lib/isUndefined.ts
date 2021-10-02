/**
 * Type Guard for undefined values
 * @example ```ts
 * const test = undefined as unknown;
 * if (isUndefined(test)) {
 *                  test; // hover will show: undefined
 * }
 * ```
 */
const isUndefined = (value: unknown): value is undefined => value === undefined;
export { isUndefined };
