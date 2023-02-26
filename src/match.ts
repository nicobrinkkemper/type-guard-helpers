import type { AnyPrimitive, TypeGuardFn } from './types';

type MatchFn<Input, Output extends Input> = <Result extends Output>(
  result: Result
) => TypeGuardFn<Input, Result>;

/**
 * Given a primitive, returns a Type Guard that checks if the given value is strictly equal to the given argument.
 * @category Type Guard Creator
 */
const match: MatchFn<unknown, AnyPrimitive> =
  (argument: unknown) =>
  (value): value is never =>
    argument === value;

/**
 * Given a primitive, returns a Type Guard that checks if the given value is strictly equal to the given argument.
 * @category Type Guard Creator
 */
const matchPrimitive: MatchFn<AnyPrimitive, AnyPrimitive> = match;

/**
 * Given a string, returns a Type Guard that checks if the given value is strictly equal to the given string.
 * @category Type Guard Creator
 */
const matchString: MatchFn<AnyPrimitive, string> = match;
/**
 * Given a number, returns a Type Guard that checks if the given value is strictly equal to the given number.
 * @category Type Guard Creator
 */
const matchNumber: MatchFn<AnyPrimitive, number> = match;
/**
 * Given a boolean, returns a Type Guard that checks if the given value is strictly equal to the given boolean.
 * @category Type Guard Creator
 */
const matchBoolean: MatchFn<AnyPrimitive, boolean> = match;
/**
 * Given a symbol, returns a Type Guard that checks if the given value is strictly equal to the given symbol.
 * @category Type Guard Creator
 */
const matchSymbol: MatchFn<AnyPrimitive, symbol> = match;
/**
 * Given a PropertyKey, returns a Type Guard that checks if the given value is strictly equal to the given PropertyKey.
 * @category Type Guard Creator
 */
const matchPropertyKey: MatchFn<AnyPrimitive, PropertyKey> = match;

export type { MatchFn };
export {
  match,
  matchPrimitive,
  matchString,
  matchNumber,
  matchSymbol,
  matchBoolean,
  matchPropertyKey
};
