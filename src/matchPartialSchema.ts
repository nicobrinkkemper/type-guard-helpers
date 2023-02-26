import { isPartial } from './isPartial';
import type {
  AnyTypeGuard,
  GuardType,
  GuardTypeInput,
  TypeGuardFn
} from './types';

/**
 * Given a Schema, returns a Type Guard that checks that the given value is an object implementing the entries of the Schema.
 *
 * The difference between this Type Guard and {@linkcode matchExactSchema} is that this Type Guard will allow additional entries that are
 * not specified in the Schema.
 *
 * The difference between this Type Guard and {@linkcode matchSchema} is that this Type Guard will allow additional entries that are
 * not specified in the Schema.
 *
 * @example
 * ```ts
 * import { matchPartialSchema,  match } from 'type-guard-helpers'
 *
 * const test = {} as unknown
 * const isFoo =  match('foo');
 * const isBar =  match('bar');
 * const isFooObject = matchPartialSchema({
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
const matchPartialSchema = <
  Schema extends {
    readonly [k: string]: AnyTypeGuard;
  }
>(
  schema: Schema
) =>
  ((value) =>
    isPartial(value) &&
    Object.entries(schema).findIndex(
      ([key, guard]) => key in value && !guard(value[key])
    ) === -1) as TypeGuardFn<
    {
      readonly [k in keyof Schema]: GuardTypeInput<Schema[k]>;
    },
    {
      readonly [k in keyof Schema]-?: GuardType<Schema[k]>;
    }
  >;

export { matchPartialSchema };
