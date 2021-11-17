import { isRecord } from './isRecord';
import type { AnyTypeGuard, GuardType } from './types';

/**
 * Given a Schema, returns a Type Guard that checks if the given value is a Partial representation of Schema.
 * A partial representation should at least have the same type, but all entries are optional and there is no check for missing or unknown keys.
 *
 * @example
 * ```ts
 * import { matchPartialSchema, matchString } from 'type-guard-helpers'
 * const test = {} as unknown
 * const isFoo = matchKey('foo');
 * const isBar = matchKey('bar');
 * const isFooObject = matchPartialSchema({
 *    foo: isFoo,
 * 		bar: isBar
 * })
 * if(isFooObject(test)){
 *    test; // { readonly foo?: "foo" | undefined; readonly bar?: "bar" | undefined; }
 * }
 * ```
 * @category Type Guard Creator
 */
const matchPartialSchema =
	<
		Schema extends {
			readonly [k in PropertyKey]: AnyTypeGuard;
		}
	>(
		schema: Schema
	) =>
	(
		value: unknown
	): value is {
		readonly [k in keyof Schema]?: GuardType<Schema[k]>;
	} =>
		isRecord(value) &&
		Object.entries(schema).findIndex(
			([key, guard]) => !(key in value) || !guard(value[key])
		) === -1;

export { matchPartialSchema };
