type MatchFn<Subject = undefined | null | number | string | symbol | boolean> =
	<Primitive extends Subject>(
		type: Primitive
	) => <Value, Result extends Primitive>(
		value: Result extends Value ? Value : Result
	) => value is Result extends Value ? Result : never;

/**
 * Given a primitive, returns a Type Guard that checks if the given value is strictly equal to the given argument.
 * @category Type Guard Creator
 */
const match: MatchFn =
	(argument) =>
	(value): value is never =>
		argument === value;
/**
 * Given a string, returns a Type Guard that checks if the given value is strictly equal to the given string.
 * @category Type Guard Creator
 */
const matchString: MatchFn<string> = match;
/**
 * Given a number, returns a Type Guard that checks if the given value is strictly equal to the given number.
 * @category Type Guard Creator
 */
const matchNumber: MatchFn<number> = match;
/**
 * Given a boolean, returns a Type Guard that checks if the given value is strictly equal to the given boolean.
 * @category Type Guard Creator
 */
const matchBoolean: MatchFn<boolean> = match;
/**
 * Given a symbol, returns a Type Guard that checks if the given value is strictly equal to the given symbol.
 * @category Type Guard Creator
 */
const matchSymbol: MatchFn<symbol> = match;
/**
 * Given a PropertyKey, returns a Type Guard that checks if the given value is strictly equal to the given PropertyKey.
 * @category Type Guard Creator
 */
const matchPropertyKey: MatchFn<PropertyKey> = match;

export type { MatchFn };
export {
	match,
	matchString,
	matchNumber,
	matchSymbol,
	matchBoolean,
	matchPropertyKey,
};
