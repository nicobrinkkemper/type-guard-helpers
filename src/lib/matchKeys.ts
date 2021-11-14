import { matchArgs } from './matchArgs';

/**
 * Given one are more Keys as arguments, creates a Type Guard to check if the given value matches at least one of the given Keys.
 * Same as {@linkcode isKeyIn}, but uses spread parameters to receive strings for convenience and automatic readonly conversion.
 *
 * A key can only be a string, number or symbol.
 *
 * @example
 * ```ts
 * import { isKeys } from 'type-guard-helpers'
 * const test = 'foo' as unknown;
 * const isFooOrBar = isKeys('foo','bar')
 * if (isFooOrBar(test)) {
 *    test; // 'foo' | 'bar'
 * }
 * ```
 * @category | Type Guard Creator
 */
const matchKeys: <Keys extends readonly PropertyKey[]>(
	...keys: Keys
) => (value: unknown) => value is Keys[number] = matchArgs;

export { matchKeys };
