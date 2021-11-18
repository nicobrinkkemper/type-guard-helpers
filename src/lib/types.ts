/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * A type on which Type Guard may extend.
 * @example
 * ```ts
 * <Guard extends AnyTypeGuard>
 * ```
 */
declare type AnyTypeGuard<Value = any, Predicate = any> = (
	value: Value,
	...args: readonly any[]
) => value is Predicate extends Value ? Predicate : never;

/**
 * A type on which iterable Type Guards may extend.
 * @example
 * ```ts
 * <Guard extends AnyIterableTypeGuard>
 * ```
 */
declare type AnyIterableTypeGuard<Value = any> =
	| ((value: Value, ...args: readonly any[]) => value is any)
	| ((value: Value, i: number) => value is any)
	| ((
			value: Value,
			i: number,
			values: readonly typeof value[]
	  ) => value is any);

/**
 * Returns a type that a Guard will assign to a variable.
 * @example
 * ```ts
 * GuardType<typeof isTypeString> // string
 * GuardType<typeof Array.isArray> // unknown[]
 * ```
 */
declare type GuardType<Guard> = Guard extends (
	value: any,
	...args: readonly any[]
) => value is infer U
	? U
	: never;

/**
 * Given an array of Types Guards, will return a intersection of all the Guard Types.
 */
type CombineGuardType<
	Arr extends readonly unknown[],
	Result = unknown
> = Arr extends readonly []
	? Result
	: Arr extends readonly [infer Head, ...infer Tail]
	? CombineGuardType<Tail, Result & GuardType<Head>>
	: never;

/**
 * Given a parameter and a predicate, return a new generic Type Guard that implements those
 */
type IterableTypeGuard<Value, Predicate> = (
	value: Value,
	i: number,
	values: readonly typeof value[]
) => value is Predicate extends Value ? Predicate : never;

/**
 * Given a parameter and a predicate, return a new generic Type Guard that implements those
 */
type TypeGuard<Value, Predicate> = (
	value: Value
) => value is Predicate extends Value ? Predicate : never;

/**
 * Given an array of Types Guards, will return a new array of Type Guards where the returned Guard Type value is piped to the arguments of the next function.
 */
export type {
	IterableTypeGuard,
	TypeGuard,
	GuardType,
	AnyIterableTypeGuard,
	AnyTypeGuard,
	CombineGuardType,
};
