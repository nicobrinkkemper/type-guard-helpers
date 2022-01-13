/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Returns a type that a Guard will assign to a variable.
 * @example
 * ```ts
 * GuardType<typeof isTypeString> // string
 * GuardType<typeof Array.isArray> // unknown[]
 * ```
 */
declare type DeepGuardType<Guard> = Guard extends (
	value: infer X
) => value is any
	? Guard extends (value: X) => value is X & infer Z
		? Guard extends (value: X) => value is X & Z
			? Z
			: GuardType<Guard>
		: GuardType<Guard>
	: GuardType<Guard>;
/**
 * Returns a type that a Guard will assign to a variable.
 * @example
 * ```ts
 * GuardType<typeof isTypeString> // string
 * GuardType<typeof Array.isArray> // unknown[]
 * ```
 */
declare type GuardType<Guard> = Guard extends (
	value: unknown,
	...args: readonly unknown[]
) => value is infer X
	? X
	: unknown;

/**
 * A type on which Type Guard may extend.
 * @example
 * ```ts
 * <Guard extends AnyTypeGuard>
 * ```
 */
declare type AnyTypeGuard<Value = any, Result = any> = (
	value: Value,
	...args: readonly any[]
) => value is Result extends Value ? Result : never;

/**
 * Given a parameter and a predicate, return a new generic Type Guard that implements those
 */
type IterableTypeGuard<Value, Result> = (
	value: Value,
	i: number,
	values: readonly Value[]
) => value is Result extends Value ? Result : never;

/**
 * Given a parameter and a predicate, return a new generic Type Guard that implements those
 */
type TypeGuard<Value, Result> = (
	value: Value
) => value is Result extends Value ? Result : never;

/**
 * Given the resulting Type, returns a well typed TypeGuard function
 */
type TypeGuardFn<A> = <Value, Result extends A>(
	value: Result extends Value ? Value : Result
) => value is Result extends Value ? Result : never;

/**
 * Given an array of Types Guards, will return a intersection of all the Guard Types.
 */
type CombineGuardType<
	Arr extends readonly unknown[],
	Result = unknown
> = Arr extends readonly []
	? Result
	: Arr extends readonly [
			(value: any, ...args: readonly any[]) => value is infer Head,
			...infer Tail
	  ]
	? CombineGuardType<Tail, Head extends Result ? Head : Result>
	: never;

/**
 * Given an array of Types Guards, will return a intersection of all the Guard Types.
 */
type CombineType<
	Arr extends readonly unknown[],
	Result = unknown
> = Arr extends readonly []
	? Result
	: Arr extends readonly [infer Head, ...infer Tail]
	? CombineType<Tail, Head extends Result ? Head : Result>
	: never;

/**
 * Given an array of Types Guards, will return a new array of Type Guards where the returned Guard Type value is piped to the arguments of the next function.
 */
export type {
	TypeGuardFn,
	IterableTypeGuard,
	TypeGuard,
	GuardType,
	AnyTypeGuard,
	CombineType,
	CombineGuardType,
	DeepGuardType,
};
