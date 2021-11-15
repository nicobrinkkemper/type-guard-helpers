/**
 * Given an object, returns a Type guard that checks if the given value is a key in given object.
 *
 * @category Type Guard Creator
 */
const matchKeyInObject =
	<A extends { readonly [k in PropertyKey]: unknown }>(object: A) =>
	(value: PropertyKey): value is keyof A =>
		value in object;

export { matchKeyInObject };
