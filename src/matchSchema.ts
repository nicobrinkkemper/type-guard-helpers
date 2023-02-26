import type {
  AnyTypeGuard,
  GuardType,
  GuardTypeInput,
  ObjectTypeGuardFn
} from './types';

/**
 * Given a Schema, returns a Type Guard that checks that the given value is an object implementing at least all the entries of the Schema.
 *
 * The difference between this Type Guard and {@linkcode matchExactSchema} is that this Type Guard will allow additional entries that are
 * not specified in the Schema. This is usually intended behavior because banning unknown keys would mean you have to implement
 * a Type Guard for every value, if you don't care about them.
 *
 * @example
 * ```ts
 * import { matchSchema,  match } from 'type-guard-helpers'
 *
 * const test = {} as unknown
 * const isFoo =  match('foo');
 * const isBar =  match('bar');
 * const isFooObject = matchSchema({
 *    foo: isFoo,
 * 		isBar: isBar
 * })
 *
 * if(isFooObject(test)){
 *    test; // { readonly foo: "foo"; readonly bar: "bar"; }
 * }
 * ```
 * @category Type Guard Creator
 */
const matchSchema = <
  Schema extends {
    readonly [k in keyof Schema]: AnyTypeGuard<
      GuardTypeInput<Schema[k]>,
      GuardType<Schema[k]>
    >;
  }
>(
  schema: Schema
) =>
  ((value: never) =>
    Object.entries(schema as never).findIndex(
      ([key, guard]) => !(guard as (a: never) => never)(value[key])
    ) === -1) as ObjectTypeGuardFn<
    {
      [K in keyof Schema | string]: K extends keyof Schema
        ? GuardTypeInput<Schema[K]>
        : unknown;
    },
    {
      readonly [k in keyof Schema]: GuardType<Schema[k]>;
    }
  >;

export { matchSchema };
