import { match } from './match';
import type { MatchFn } from './match';
/**
 * Given a number, returns a Type Guard that checks if the given value exactly matches the given number.
 *
 * The results would be the same as using {@linkcode match}, but has a type definition better suited for working with string literals.
 *
 * @example
 * ```ts
 * import { matchNumber } from 'type-guard-helpers'
 *
 * const test = 6 as unknown;
 * const isTrue = matchNumber(6)
 * if (isTrue(test)) {
 *    test; // 6
 * }
 * ```
 * @category Type Guard Creator
 */
const matchNumber: MatchFn<number> = match;

export { matchNumber };
