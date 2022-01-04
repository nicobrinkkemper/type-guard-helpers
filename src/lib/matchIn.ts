import type { AnyPrimitive } from './types';

type MatchInFn<Subject = AnyPrimitive> = <
	Primitives extends readonly Subject[]
>(
	arr: Primitives
) => <Value, Result extends Primitives[number]>(
	value: Result extends Value
		? Value
		: Result extends AnyPrimitive
		? Result
		: never
) => value is Result extends Value ? Result : never;

/**
 * Given an array of primitives, returns a Type Guard that checks if the given value is strictly equal to any of the given primitives.
 * @category Type Guard Creator
 */
const matchIn: MatchInFn =
	(arr) =>
	(value): value is never =>
		arr.indexOf(value as AnyPrimitive) !== -1;

/**
 * Given an array of strings, returns a Type Guard that checks if the given value is strictly equal to any of the given strings.
 * @category Type Guard Creator
 */
const matchStringIn: MatchInFn<string> = matchIn;

/**
 * Given an array of numbers, returns a Type Guard that checks if the given value is strictly equal to any of the given numbers.
 * @category Type Guard Creator
 */
const matchNumberIn: MatchInFn<string> = matchIn;

/**
 * Given an array of booleans, returns a Type Guard that checks if the given value is strictly equal to any of the given booleans.
 * @category Type Guard Creator
 */
const matchBooleanIn: MatchInFn<string> = matchIn;

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
	matchPropertyKeyIn,
};
