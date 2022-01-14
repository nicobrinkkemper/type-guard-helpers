import { isRecord } from './isRecord';
import type { AnyTypeGuard, GuardType } from './types';

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
const matchSchema =
	<
		Schema extends {
			readonly [k: string]: AnyTypeGuard<unknown, unknown>;
		}
	>(
		schema: Schema
	) =>
	<
		Value,
		Result extends {
			readonly [k in keyof Schema]: GuardType<Schema[k]>;
		} & Value
	>(
		value: Value
	): value is Result =>
		isRecord(value) &&
		Object.entries(schema).findIndex(
			([key, guard]: readonly [keyof Schema, AnyTypeGuard]) =>
				!guard(value[key])
		) === -1;

export { matchSchema };
