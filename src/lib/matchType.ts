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
type MatchType<Type extends MatchableTypes> = Type extends 'boolean'
	? boolean
	: Type extends 'bigint'
	? bigint
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

type MatchTypeFn = <Type extends MatchableTypes>(
	type: Type
) => <Value>(value: Value) => value is MatchType<Type> & Value;

/**
 * Given any argument, returns a Type Guard that checks if the given value is strictly equal to the given argument.
 * @category Type Guard Creator
 */
const matchType: MatchTypeFn =
	(type: string) =>
	(value: unknown): value is never =>
		typeof value === type;

export { matchType, MatchType, MatchableTypes, MatchTypeFn };
