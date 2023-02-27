import type { MatchableTypes, MatchTypeFromString } from './matchType';
import type { TypeGuardFn } from './types';

type MatchTypeInFn<Types extends readonly MatchableTypes[]> = TypeGuardFn<
  unknown,
  MatchTypeFromString<Types[number]>
>;

type MatchTypeIn = <Types extends readonly MatchableTypes[]>(
  types: Types
) => MatchTypeInFn<Types>;

/**
 * Given one or more type names as array, returns a Type Guard that checks if the type of the given value matches at least one of the given type names.
 *
 * @category Type Guard Creator
 */
const matchTypeIn: MatchTypeIn =
  (types) =>
  (value): value is never =>
    types.indexOf(typeof value) !== -1;

export { matchTypeIn, MatchTypeInFn, MatchTypeIn };
