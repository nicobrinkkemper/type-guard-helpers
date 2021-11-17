import { matchIn } from './matchIn';

/**
 * Given one or more keys as array, creates a Type Guard to check if the given value matches at least one of the given Keys.
 *
 * By giving an array, some type information may be lost unless `as const` is used. If you don't wish to write `as const`, use
 * {@linkcode matchKeys}.
 *
 * @example
 * ```ts
 * import { isIn } from 'type-guard-helpers'
 *
 * const test = 'foo' as unknown;
 * const isFooOrBar = isIn(['foo','bar'] as const) // without const, it will be typed as string
 * if (isFooOrBar(test)) {
 *     test; // 'foo' | 'bar'
 * }
 * ```
 * @category Type Guard Creator
 */
const matchKeyIn: <Keys extends readonly PropertyKey[]>(
	keys: Keys
) => (value: unknown) => value is Keys[number] = matchIn;

export { matchKeyIn };
