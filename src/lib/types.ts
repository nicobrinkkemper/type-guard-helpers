declare type GuardType<GUARD> = GUARD extends (o: unknown) => o is infer U
  ? U
  : never;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare type AnyGuardType = (value: any) => value is any;

declare type GuardSchema<
  SCHEMA extends { readonly [KEY in keyof SCHEMA]: unknown }
> = {
  readonly [KEY in keyof SCHEMA]: AnyGuardType;
};

export { GuardSchema, GuardType, AnyGuardType };
