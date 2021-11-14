import { match } from './match';

/**
 * Given a boolean, returns a Type Guard that will check if the given value exactly matches the given boolean.
 *
 * The results would be the same as using {@linkcode match}, but has a type definition better suited for working with string literals.
 *
 * @example
 * ```ts
 * import { matchBoolean } from 'type-guard-helpers'
 * const test = {} as unknown;
 * const isTrue = matchBoolean(true)
 * if (isTrue(test)) {
 *    test; // true
 * }
 * ```
 * @category Type Guard Creator
 */
const matchBoolean: <BooleanLiteral extends boolean>(
	boolean: BooleanLiteral
) => (value: unknown) => value is BooleanLiteral = match;

export { matchBoolean };
