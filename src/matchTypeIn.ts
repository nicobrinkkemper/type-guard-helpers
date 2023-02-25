import type { MatchableTypes, MatchType } from './matchType';

type MatchTypeInFn = <
  Types extends readonly MatchableTypes[],
  Result extends MatchType<Types[number]>
>(
  types: Types
) => <Value, Predicate extends Result extends Value ? Result : never>(
  value: Result extends Value ? Value : Result
) => value is Predicate;

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
