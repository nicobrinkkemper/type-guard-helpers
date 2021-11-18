import { matchArgs } from './matchArgs';

/**
 * Given one are more Numbers as arguments, creates a Type Guard to check if the given value matches at least one of the given Numbers.
 * Same as {@linkcode matchStringIn}, but uses spread parameters to receive Numbers for convenience and automatic readonly conversion.
 *
 * @example
 * ```ts
 * import { matchNumbers } from 'type-guard-helpers'
 * const test = 'foo' as unknown;
 * const isFooBar = matchNumbers('foo', 'bar')
 * if (isFooBar(test)) {
 *    test; // 'foo' | 'bar'
 * }
 * ```
 * @category Type Guard Creator
 */
const matchNumbers: <Predicate extends number>(
	...keys: readonly Predicate[]
) => <Value>(
	value: Value
) => value is Predicate extends Value ? Predicate : never = matchArgs;

export { matchNumbers };
