/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * A type to convert the string returned by `typeof x` to its typescript type
 */
type MatchType<Type> = Type extends 'boolean'
	? boolean
	: Type extends 'bigint'
	? bigint
	: Type extends 'function'
	? (...args: readonly unknown[]) => unknown
	: Type extends 'number'
	? number
	: Type extends 'object'
	? { readonly [k: PropertyKey]: unknown } | null
	: Type extends 'string'
	? string
	: Type extends 'symbol'
	? symbol
	: Type extends 'undefined'
	? undefined
	: never;
/**
 * A type to convert `A | B` to `A & B`
 */
type UnionToIntersection<U> = (
	U extends unknown ? (k: U) => unknown : never
) extends (k: infer I) => unknown
	? I
	: never;

/**
 * A type that a Guard will assign to a variable.
 * @example
 * ```ts
 * GuardType<typeof isString> // string
 * GuardType<typeof Array.isArray> // any[]
 * ```
 */
declare type GuardType<Guard extends AnyTypeGuard> = Guard extends (
	value: unknown,
	...args: readonly any[]
) => value is infer U
	? U
	: never;

/**
 * A type on which Type Guard may extend.
 * @example
 * ```ts
 * <Guard extends AnyTypeGuard>
 * ```
 */
declare type AnyTypeGuard = (
	value: any,
	...args: readonly any[]
) => value is any;

/**
 * A type on which iterable Type Guards may extend.
 * @example
 * ```ts
 * <Guard extends IterableTypeGuard>
 * ```
 */
declare type IterableTypeGuard =
	| ((value: any) => value is any)
	| ((value: any, i: number) => value is any)
	| ((value: any, i: number, values: readonly any[]) => value is any);

/**
 * A Type Guard on which Type Guards for object keys can extend
 */
declare type KeyTypeGuard = (value: any) => value is PropertyKey;

/**
 * A Type Guard on which Type Guards for objects entries can extend
 */
declare type EntryTypeGuard =
	| ((value: any) => value is readonly [PropertyKey, any])
	| ((value: any, i: number) => value is readonly [PropertyKey, any])
	| ((
			value: any,
			i: number,
			values: readonly any[]
	  ) => value is readonly [PropertyKey, any]);

/**
 * Given any generic array, returns the last type of the given array.
 */
type Last<
	Tuple extends readonly any[],
	Default = never
> = Tuple extends readonly []
	? Default
	: Tuple extends readonly [infer FirstElement]
	? FirstElement
	: Tuple extends ReadonlyArray<infer Element>
	? readonly Element[] extends Tuple
		? Element
		: Tuple extends readonly [any, ...infer Next]
		? Last<Next>
		: never
	: Default;

/**
 * A Type Guard that only allows one argument
 */
type OneArgGuardType = (value: any) => value is any;

type PipedTypeGuard<A, B> = (
	value: A,
	...args: readonly unknown[]
) => value is B extends A ? B : never;

export type {
	PipedTypeGuard,
	OneArgGuardType,
	Last,
	MatchType,
	GuardType,
	EntryTypeGuard,
	IterableTypeGuard,
	AnyTypeGuard,
	UnionToIntersection,
	KeyTypeGuard,
};
