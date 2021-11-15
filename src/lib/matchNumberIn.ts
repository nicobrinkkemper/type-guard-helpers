import { matchIn } from './matchIn';

/**
 * Given one or more numbers as array, creates a Type Guard to check if the given value matches at least one of the given numbers.
 *
 * By giving a array, some type information may be lost unless `as const` is used. If you don't wish to write `as const`, use
 * {@linkcode matchNumbers} instead and supply the array as arguments.
 *
 * @example
 * ```ts
 * import { matchNumberIn } from 'type-guard-helpers'
 *
 * const test = 'foo' as unknown;
 * const isFooOrBar = matchNumberIn([1,2,3] as const) // without const, it will be typed as number
 * if (isFooOrBar(test)) {
 *     test; // 1 | 2 | 3
 * }
 * ```
 * @category Type Guard Creator
 */
const matchNumberIn: <As extends readonly number[]>(
	keys: As
) => (value: unknown) => value is As[number] = matchIn;

export { matchNumberIn };