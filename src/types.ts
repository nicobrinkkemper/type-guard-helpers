/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Returns a type that a Guard will assign to a variable.
 * @example
 * ```ts
 * GuardType<typeof isTypeString> // string
 * GuardType<typeof Array.isArray> // unknown[]
 * ```
 */
declare type GuardType<Guard> = Guard extends TypeGuard<
  infer Input,
  infer Return
>
  ? Combine<Input, Return>
  : never;

declare type TypeGuardSchema = {
  readonly [k in string]: AnyTypeGuard;
};

/**
 * Returns a type that a Guard will extend the output of the given Guard.
 * @example
 * ```ts
 * GuardType<typeof isTypeString> // string
 * GuardType<typeof Array.isArray> // unknown[]
 * ```
 */
type PipeGuard<Guard extends AnyTypeGuard> = (
  value: GuardType<Guard>
) => value is typeof value;

/**
 * Returns a type that a Guard will assign to a variable.
 * @example
 * ```ts
 * GuardType<typeof isTypeString> // string
 * GuardType<typeof Array.isArray> // unknown[]
 * ```
 */
declare type GuardTypeInput<Guard> = Guard extends TypeGuard<
  infer Input,
  infer _
>
  ? Input
  : never;

/**
 * Returns a type that a Guard will assign to a variable.
 * Deep check on parameter/value and only return type without combining value.
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
    ? Z
    : GuardType<Guard>
  : GuardType<Guard>;

/**
 * A type on which Type Guard may extend. Should be used when it can be a multi parameter guard.
 * @example
 * ```ts
 * <Guard extends AnyTypeGuard>
 * ```
 */

declare type AnyIterableTypeGuard<Input = any, Output = any> = (
  value: Input,
  index: number,
  values: readonly Input[]
) => value is Input & Output;

/**
 * A type on which Type Guard may extend. Should be used when it can be a multi parameter guard.
 * @example
 * ```ts
 * <Guard extends AnyTypeGuard>
 * ```
 */

declare type AnyTypeGuard<Input = any, Output extends Input = Input> = (
  value: Input,
  ...args: readonly any[]
) => value is Output;

/**
 * Given a parameter and a predicate, return a new generic Type Guard that implements those
 */
declare type IterableTypeGuard<Value, Result> = (
  value: Value,
  i: number,
  values: readonly Value[]
) => value is Result extends Value ? Result : never;

/**
 * Given a parameter and a predicate, return a new generic Type Guard that implements those
 */
type TypeGuard<Value, Result extends Value> = (value: Value) => value is Result;

/**
 * Given a parameter and a predicate, return a new generic Type Guard that implements those
 */
type NegateTypeGuardFn<Excluded> = <Value>(
  value: Value
) => value is Exclude<Value, Excluded>;

/**
 * Given a parameter and a predicate, return a new generic Type Guard that implements those
 */
type NegateIterableTypeGuardFn<Excluded> = <Value>(
  value: Value,
  i: number,
  values: readonly Value[]
) => value is Exclude<Value, Excluded>;

/**
 * Given the resulting Type, returns a Type Guard function
 */
declare type TypeGuardFn<Input, Output> = <
  Value extends Input,
  Result extends Output = Output
>(
  value: Value
) => value is Combine<Value, Result>;

/**
 * Given the resulting Type, returns a Type Guard function
 */
declare type ExcludeTypeGuardFn<A> = <Value, Result extends A = A>(
  value: Value | Result
) => value is Exclude<Value, Result>;

/**
 * Given an array of Type Guards, will return the intersection of all given Guard Types. Think `GuardType` for arrays.
 */
declare type GuardTypes<
  Guards extends readonly AnyTypeGuard[],
  Result = unknown
> = Guards extends readonly [infer Head, ...infer Tail]
  ? Tail extends readonly AnyTypeGuard[]
    ? GuardTypes<Tail, Combine<DeepGuardType<Head>, Result>>
    : never
  : Result;

/**
 * Given two types, will return a intersection of all the types. The difference between this and `CombineType` is that this will merge object based on keys.
 */
declare type Combine<A, B> = B extends A
  ? B
  : A extends B
  ? A
  : {
      readonly [K in keyof (A & B)]-?: (A & B)[K];
    } extends A & B
  ? {
      readonly [K in keyof (A & B)]-?: (A & B)[K];
    }
  : A & B;

declare type CombineObject<A, B> = {
  readonly [K in keyof (A & B)]-?: (A & B)[K];
};
/**
 * Anything that may be inferred by Typescript as a primitive
 */
declare type AnyPrimitive =
  | undefined
  | null
  | number
  | string
  | symbol
  | boolean;

export type {
  TypeGuardSchema,
  AnyPrimitive,
  TypeGuardFn,
  IterableTypeGuard,
  NegateIterableTypeGuardFn,
  TypeGuard,
  NegateTypeGuardFn,
  GuardType,
  GuardTypeInput,
  AnyTypeGuard,
  ExcludeTypeGuardFn,
  GuardTypes,
  Combine,
  PipeGuard,
  CombineObject,
  DeepGuardType,
  AnyIterableTypeGuard
};
