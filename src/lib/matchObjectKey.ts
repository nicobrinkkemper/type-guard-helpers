/**
 * Given a key, returns a Type Guard that checks if the given key is a key in given value.
 *
 * This is the opposite of {@linkcode isKeyIn}, because the order in which the key and object are given is reversed.
 * @example
 * ```ts
 * import { matchObjectKey, isRecord } from "type-guard-helpers"
 *
 * const test = {} as unknown;
 * const hasFooKey = matchObjectKey('foo')
 * if (isRecord(test) && hasFooKey(test)) {
 * 	 test; // { readonly foo: unknown; }
 * }
 * ```
 * @category | Type Guard Creator
 */
const matchObjectKey =
	<Key extends PropertyKey>(key: Key) =>
	(value: { readonly [k in PropertyKey]: unknown }): value is {
		readonly [k in Key]: unknown;
	} =>
		key in value;

export { matchObjectKey };
