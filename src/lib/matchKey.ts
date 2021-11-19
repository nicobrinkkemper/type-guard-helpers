import { match } from './match';
import type { MatchFn } from './match';

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
const matchKey: MatchFn<PropertyKey> = match;

export { matchKey };
