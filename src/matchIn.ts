import type { AnyPrimitive, TypeGuardFn } from './types';

type MatchInFn<
  Input extends AnyPrimitive,
  Output extends readonly Input[]
> = TypeGuardFn<Input, Output[number]>;

type MatchIn<Input extends AnyPrimitive = AnyPrimitive> = <
  Arr extends readonly Input[]
>(
  arr: readonly [...Arr]
) => MatchInFn<Input, Arr>;

/**
 * Given an array of primitives, returns a Type Guard that checks if the given value is strictly equal to any of the given primitives.
 * @category Type Guard Creator
 */
const matchIn: MatchIn =
  (arr) =>
  (value): value is never =>
    arr.indexOf(value) !== -1;

/**
 * Given an array of strings, returns a Type Guard that checks if the given value is strictly equal to any of the given strings.
 * @category Type Guard Creator
 */
const matchStringIn: MatchIn<string> = matchIn;

/**
 * Given an array of numbers, returns a Type Guard that checks if the given value is strictly equal to any of the given numbers.
 * @category Type Guard Creator
 */
const matchNumberIn: MatchIn<number> = matchIn;

/**
 * Given an array of booleans, returns a Type Guard that checks if the given value is strictly equal to any of the given booleans.
 * @category Type Guard Creator
 */
const matchBooleanIn: MatchIn<boolean> = matchIn;

/**
 * Given an array of PropertyKeys, returns a Type Guard that checks if the given value is strictly equal to any of the given PropertyKeys.
 * @category Type Guard Creator
 */
const matchPropertyKeyIn: MatchIn<PropertyKey> = matchIn;

export type { MatchInFn, MatchIn };
export {
  matchIn,
  matchStringIn,
  matchNumberIn,
  matchBooleanIn,
  matchPropertyKeyIn
};
