import type { AnyPrimitive, TypeGuardFn } from './types';

type MatchInFn<Input = AnyPrimitive> = <Arr extends readonly Input[]>(
  arr: readonly [...Arr]
) => TypeGuardFn<Input, Arr[number]>;

/**
 * Given an array of primitives, returns a Type Guard that checks if the given value is strictly equal to any of the given primitives.
 * @category Type Guard Creator
 */
const matchIn: MatchInFn =
  (arr) =>
  (value): value is never =>
    arr.indexOf(value) !== -1;

/**
 * Given an array of strings, returns a Type Guard that checks if the given value is strictly equal to any of the given strings.
 * @category Type Guard Creator
 */
const matchStringIn: MatchInFn<string> = matchIn;

/**
 * Given an array of numbers, returns a Type Guard that checks if the given value is strictly equal to any of the given numbers.
 * @category Type Guard Creator
 */
const matchNumberIn: MatchInFn<number> = matchIn;

/**
 * Given an array of booleans, returns a Type Guard that checks if the given value is strictly equal to any of the given booleans.
 * @category Type Guard Creator
 */
const matchBooleanIn: MatchInFn<boolean> = matchIn;

/**
 * Given an array of PropertyKeys, returns a Type Guard that checks if the given value is strictly equal to any of the given PropertyKeys.
 * @category Type Guard Creator
 */
const matchPropertyKeyIn: MatchInFn<PropertyKey> = matchIn;

export type { MatchInFn };
export {
  matchIn,
  matchStringIn,
  matchNumberIn,
  matchBooleanIn,
  matchPropertyKeyIn
};
