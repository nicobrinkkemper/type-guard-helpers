/**
 * Creates a Type Guard for one or multiple strings. Same as `isStringLike`, but does not use spread parameters and instead requires the first parameter to be a array.
 * @example ```ts
 * const test = 'foo' as unknown;
 * const isFooOrBar = isStringIn(['foo','bar'] as const)
 * if (isFooOrBar(test)) {
 *                  test; // hover will show: 'foo' | 'bar'
 * }
 * ```
 */
const isStringIn =
  <A extends readonly string[]>(strings: A) =>
  (value: unknown): value is A[number] =>
    strings.indexOf(value as A[number]) !== -1;

export { isStringIn };
