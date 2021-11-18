import { isRecord } from './isRecord';
import type { AnyTypeGuard, GuardType } from './types';

/**
 *
 * Given a Schema, returns a Type Guard that checks the the given value is a object exactly implementing the entries of the Schema.
 *
 * This Type Guard returns false if a given value contains keys that are not specified in the Schema.
 * If you want to allow unknown keys, see {@linkcode matchSchema}
 *
 * @example
 * ```ts
 * import { matchExactSchema, matchString } from 'type-guard-helpers'
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
const matchExactSchema =
	<
		Schema extends {
			readonly [k in PropertyKey]: AnyTypeGuard<unknown, unknown>;
		}
	>(
		schema: Schema
	) =>
	(
		value: unknown
	): value is { readonly [k in keyof Schema]: GuardType<Schema[k]> } =>
		isRecord(value) &&
		Object.keys(value).findIndex((key) => !(key in schema)) === -1 &&
		Object.entries(schema).findIndex(
			([key, guard]) => !(key in value && guard(value[key]))
		) === -1;

export { matchExactSchema };
