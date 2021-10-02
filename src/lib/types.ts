/* eslint-disable @typescript-eslint/no-explicit-any */

/** Extracts the type from a Guard would assign to a variable when passed. */
declare type GuardType<GUARD> = GUARD extends (o: unknown) => o is infer U
  ? U
  : never;

/** A type on which other Guards may extend.  */
declare type AnyGuardType = (value: any) => value is any;

/** Creates a type for a Record that holds Type Guards. */
declare type GuardSchema<
  SCHEMA extends { readonly [KEY in keyof SCHEMA]: unknown }
> = {
  readonly [KEY in keyof SCHEMA]: AnyGuardType;
};

export { GuardSchema, GuardType, AnyGuardType };
