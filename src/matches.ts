import { matchIn } from './matchIn';
import type { AnyPrimitive } from './types';

type MatchesFn<Subject = AnyPrimitive> = <
	Primitives extends readonly Subject[]
>(
	...args: Primitives
) => <Value, Result extends Primitives[number]>(
	value: Result extends Value
		? Value
		: Result extends AnyPrimitive
		? Result
		: never
) => value is Result extends Value ? Result : never;

/**
 * Given primitives as arguments, returns a Type Guard that checks if the given value is strictly equal to one of the given primitives.
 * @category Type Guard Creator
 */
const matches: MatchesFn = (...args) => matchIn(args);
/**
 * Given strings as arguments, returns a Type Guard that checks if the given value is strictly equal to one of the given primitives.
 * @category Type Guard Creator
 */
const matchStrings: MatchesFn<string> = matches;
/**
 * Given numbers as arguments, returns a Type Guard that checks if the given value is strictly equal to one of the given primitives.
 * @category Type Guard Creator
 */
const matchNumbers: MatchesFn<number> = matches;
/**
 * Given booleans as arguments, returns a Type Guard that checks if the given value is strictly equal to one of the given primitives.
 * @category Type Guard Creator
 */
const matchBooleans: MatchesFn<boolean> = matches;
/**
 * Given PropertyKeys as arguments, returns a Type Guard that checks if the given value is strictly equal to one of the given primitives.
 * @category Type Guard Creator
 */
const matchPropertyKeys: MatchesFn<PropertyKey> = matches;

export {
	matches,
	matchNumbers,
	matchStrings,
	matchPropertyKeys,
	matchBooleans,
};
export type { MatchesFn };
