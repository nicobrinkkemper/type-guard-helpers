import type {
  GuardType,
  GuardTypeInput,
  TypeGuardFn,
  TypeGuardSchema
} from './types';

type MatchExactSchemaFn<Schema extends TypeGuardSchema> = TypeGuardFn<
  {
    [K in keyof Schema]: GuardTypeInput<Schema[K]>;
  },
  {
    readonly [k in keyof Schema]: GuardType<Schema[k]>;
  }
>;

type MatchExactSchema = <Schema extends TypeGuardSchema>(
  schema: Schema
) => MatchExactSchemaFn<Schema>;

/**
 *
 * Given a Schema, returns a Type Guard that checks that the given value is a object exactly implementing the entries of the Schema.
 *
 * This Type Guard returns false if a given value contains keys that are not specified in the Schema.
 * If you want to allow unknown keys, see {@linkcode matchSchema}
 *
 * @example
 * ```ts
 * import { matchExactSchema,  match } from 'type-guard-helpers'
 *
 * const test = {} as unknown
 * const isFoo = match'foo');
 * const isBar = match'bar');
 * const isFooObject = matchExactSchema({
 *    foo: isFoo,
 *    bar: isBar
 * })
 *
 * if(isFooObject(test)){
 *    test; // { readonly foo: "foo"; readonly bar: "bar"; }
 * }
 * ```
 * @category Type Guard Creator
 */
const matchExactSchema: MatchExactSchema =
  (schema) =>
  (value): value is never =>
    Object.keys(value).findIndex((key) => !(key in schema)) === -1 &&
    Object.entries(schema).findIndex(
      ([key, guard]) => !(key in value && guard(value[key]))
    ) === -1;

export { matchExactSchema };
