/**
 * Returns a type that a Guard will assign to a variable.
 * @example
 * ```ts
 * GuardType<typeof isTypeString> // string
 * GuardType<typeof Array.isArray> // unknown[]
 * ```
 */
declare type GuardType<Guard> = Guard extends TypeGuard<
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  infer _,
  infer Return
>
  ? Return
  : never;

/**
 * Returns a type that a Guard that will extend the output of the given Guard.
 * @example
 * ```ts
 * GuardType<typeof isTypeString> // string
 * GuardType<typeof Array.isArray> // unknown[]
 * ```
 */
type PipeGuard<Guard extends AnyTypeGuard> = (
  value: GuardType<Guard>
) => value is GuardType<Guard>;

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
declare type AnyIterableTypeGuard = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any,
  index: number,
  values: readonly (typeof value)[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
) => value is any;

/**
 * A type on which Type Guard may extend. Should be used when it can be a multi parameter guard.
 * @example
 * ```ts
 * <Guard extends AnyTypeGuard>
 * ```
 */
declare type AnyTypeGuard = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any,
  ...args: readonly any[]
) => value is any;

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
type NegateTypeGuard<Result> = <Value>(
  value: Value
) => value is Exclude<Value, Result>;

/**
 * Given the resulting Type, returns a Type Guard function
 */
declare type TypeGuardFn<Input, Output extends Input> = <
  Value extends Input,
  Result extends Combine<Value, Output>
>(
  value: Result extends Value ? Value : Result
) => value is Result extends Value ? Result : never;

/**
 * Given a parameter and a predicate, return a new generic Type Guard that implements excluding those types
 */
declare type NegateTypeGuardFn<Guard extends AnyTypeGuard> =
  Guard extends TypeGuard<infer Input, infer Output>
    ? <Value extends Input>(value: Value) => value is Exclude<Value, Output>
    : never;

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
 * Given an array, will return a intersection of all the types. The difference between this and `CombineObjectType` is that this will simply use & to combine types.
 */
declare type CombineTypes<
  Arr extends readonly unknown[],
  Result = unknown
> = Arr extends readonly []
  ? Result
  : Arr extends readonly [infer Head, ...infer Tail]
  ? CombineTypes<Tail, Combine<Head, Result>>
  : never;

/**
 * Given two types, will return a object intersection of all the types. The difference between this and `CombineType` is that this will merge object based on keys.
 */
declare type Combine<A, B> = A & B;

declare type CombineObject<A, B> = B extends A
  ? B
  : A extends B
  ? A
  : {
      [K in keyof A | keyof B]: K extends keyof A
        ? K extends keyof B
          ? Combine<A[K], B[K]>
          : A[K]
        : K extends keyof B
        ? B[K]
        : never;
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
  NegateTypeGuardFn,
  AnyPrimitive,
  TypeGuardFn,
  IterableTypeGuard,
  TypeGuard,
  NegateTypeGuard,
  GuardType,
  GuardTypeInput,
  AnyTypeGuard,
  ExcludeTypeGuardFn,
  CombineTypes,
  GuardTypes,
  Combine,
  PipeGuard,
  CombineObject,
  DeepGuardType,
  AnyIterableTypeGuard
};
