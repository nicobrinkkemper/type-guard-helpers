import type { MatchType } from './matchType';
import type { MatchableTypes } from './matchType';

type MatchTypeInFn = <Types extends readonly MatchableTypes[]>(
	types: Types
) => <Value>(value: Value) => value is Value & MatchType<Types[number]>;

/**
 * Given one or more type names as array, returns a Type Guard that checks if the type of the given value matches at least one of the given type names.
 *
 * @category Type Guard Creator
 */
const matchTypeIn: MatchTypeInFn =
	(types) =>
	(value): value is never =>
		types.indexOf(typeof value) !== -1;

export { matchTypeIn, MatchTypeInFn };
