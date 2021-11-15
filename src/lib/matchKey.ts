import { match } from './match';

/**
 * Given a key, returns a Type Guard that checks if the given value exactly matches the given key.
 * Same as {@linkcode matchKeys}, but only accepts one argument
 *
 * @example
 * ```ts
 * import { matchKey } from 'type-guard-helpers'
 * const test = 'foo' as unknown;
 * const isFooOrBar = matchKey('foo')
 * if (isFooOrBar(test)) {
 *    test; // 'foo'
 * }
 * ```
 * @category Type Guard Creator
 */
const matchKey: <Key extends PropertyKey>(
	key: Key
) => (value: unknown) => value is Key = match;

export { matchKey };
