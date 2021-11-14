/* eslint-disable @typescript-eslint/no-explicit-any */

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
	value: unknown
) => value is infer U
	? U
	: never;

/**
 * A type on which Type Guard may extend.
 * @example
 * ```ts
 * <Guard extends AnyTypeGuard>(guard: Guard) => guard();
 * ```
 */
declare type AnyTypeGuard = (value: any) => value is any;

/**
 * A Type Guard on which Type Guards for object keys can extend
 */
declare type KeyTypeGuard = (value: any) => value is PropertyKey;

/**
 * A Type Guard on which Type Guards for objects entries can extend
 */
declare type EntryTypeGuard = (
	value: any
) => value is readonly [PropertyKey, unknown];

export type {
	MatchType,
	GuardType,
	EntryTypeGuard,
	AnyTypeGuard,
	UnionToIntersection,
	KeyTypeGuard,
};
