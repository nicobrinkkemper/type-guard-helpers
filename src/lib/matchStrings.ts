import { matchArgs } from './matchArgs';

/**
 * Given one are more strings as arguments, creates a Type Guard to check if the given value matches at least one of the given strings.
 * Same as {@linkcode matchStringIn}, but uses spread parameters to receive strings for convenience and automatic readonly conversion.
 *
 * @example
 * ```ts
 * import { matchStrings } from 'type-guard-helpers'
 * const test = 'foo' as unknown;
 * const isFooBar = matchStrings('foo', 'bar')
 * if (isFooBar(test)) {
 *    test; // 'foo' | 'bar'
 * }
 * ```
 * @category Type Guard Creator
 */
const matchStrings: <As extends readonly string[]>(
	...keys: As
) => (value: unknown) => value is As[number] = matchArgs;

export { matchStrings };
