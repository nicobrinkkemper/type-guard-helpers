import { matchEitherIn } from './matchEitherIn';

/**
 * Given one or more strings as array, creates a Type Guard to check if the given value matches at least one of the given Keys.
 *
 * By giving an array, some type information may be lost unless `as const` is used. If you don't wish to write `as const`, use
 * {@linkcode matchStrings} instead and supply the array as arguments.
 *
 * @example
 * ```ts
 * import { matchStringIn } from 'type-guard-helpers'
 *
 * const test = 'foo' as unknown;
 * const isFooOrBar = matchStringIn(['foo','bar'] as const) // without const, it will be typed as string
 * if (isFooOrBar(test)) {
 *     test; // 'foo' | 'bar'
 * }
 * ```
 * @category Type Guard Creator
 */
const matchStringIn: <As extends readonly string[]>(
	keys: As
) => (value: unknown) => value is As[number] = matchEitherIn;

export { matchStringIn };
