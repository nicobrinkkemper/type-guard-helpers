import type { MatchableTypes } from './matchType';
import type { MatchTypeInFn } from './matchTypeIn';
import { matchTypeIn } from './matchTypeIn';

type MatchTypes = <Types extends readonly MatchableTypes[]>(
  ...types: Types
) => MatchTypeInFn<Types>;

/**
 * Given one or more type names as arguments, returns a Type Guard that checks if the type of the given value matches at least one of the type names.
 *
 * @category Type Guard Creator
 */
const matchTypes: MatchTypes = (...types) => matchTypeIn(types);

export { matchTypes };
export type { MatchTypes };