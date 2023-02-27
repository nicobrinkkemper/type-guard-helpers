import type { MatchInFn } from './matchIn';
import { matchIn } from './matchIn';
import type { AnyPrimitive } from './types';

type Matches<Input extends AnyPrimitive = AnyPrimitive> = <
  Args extends readonly Input[]
>(
  ...args: readonly [...Args]
) => MatchInFn<Input, Args>;

/**
 * Given primitives as arguments, returns a Type Guard that checks if the given value is strictly equal to one of the given primitives.
 * @category Type Guard Creator
 */
const matches: Matches = (...args) => matchIn(args);
/**
 * Given strings as arguments, returns a Type Guard that checks if the given value is strictly equal to one of the given primitives.
 * @category Type Guard Creator
 */
const matchStrings: Matches<string> = matches;
/**
 * Given numbers as arguments, returns a Type Guard that checks if the given value is strictly equal to one of the given primitives.
 * @category Type Guard Creator
 */
const matchNumbers: Matches<number> = matches;
/**
 * Given booleans as arguments, returns a Type Guard that checks if the given value is strictly equal to one of the given primitives.
 * @category Type Guard Creator
 */
const matchBooleans: Matches<boolean> = matches;
/**
 * Given PropertyKeys as arguments, returns a Type Guard that checks if the given value is strictly equal to one of the given primitives.
 * @category Type Guard Creator
 */
const matchPropertyKeys: Matches<PropertyKey> = matches;

export {
  matches,
  matchNumbers,
  matchStrings,
  matchPropertyKeys,
  matchBooleans
};
export type { Matches };
