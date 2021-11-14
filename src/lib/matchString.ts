import { match } from './match';

/**
 * Given a string, returns a Type Guard that will check if the given value exactly matches the given string.
 *
 * The results would be the same as using {@linkcode match}, but has a type definition better suited for working with string literals.
 *
 * @example
 * ```ts
 * import { matchString } from 'type-guard-helpers'
 * const test = 'foo' as unknown;
 * const isFooOrBar = match'foo')
 * if (isFooOrBar(test)) {
 *    test; // 'foo'
 * }
 * ```
 * @category Type Guard Creator
 */
const matchString: <StringLiteral extends string>(
	string: StringLiteral
) => (value: unknown) => value is StringLiteral = match;

export { matchString };
