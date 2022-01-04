/**
 * Possible strings to pass to {@linkcode matchType}
 */
type MatchableTypes =
	| 'boolean'
	| 'function'
	| 'number'
	| 'bigint'
	| 'object'
	| 'string'
	| 'symbol'
	| 'undefined';

/**
 * A type to convert the string returned by `typeof x` to its typescript type
 */
type MatchType<Type> = Type extends 'boolean'
	? boolean
	: Type extends 'bigint'
	? number
	: Type extends 'function'
	? (...args: readonly unknown[]) => unknown
	: Type extends 'number'
	? number
	: Type extends 'object'
	? // eslint-disable-next-line @typescript-eslint/ban-types
	  {} | null
	: Type extends 'string'
	? string
	: Type extends 'symbol'
	? symbol
	: Type extends 'undefined'
	? undefined
	: never;

/**
 * Given any argument, returns a Type Guard that checks if the given value is strictly equal to the given argument.
 * @category Type Guard Creator
 */
const matchType =
	<T extends MatchableTypes, A extends MatchType<T>>(type: T) =>
	<Value, Predicate extends A extends Value ? A : never>(
		value: A extends Value ? Value : A
	): value is Predicate =>
		typeof value === type;

export { matchType, MatchType, MatchableTypes };
