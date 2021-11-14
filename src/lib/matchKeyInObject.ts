/**
 * Given an object, will return a Type guard that checks if the given value is a key in given object.
 *
 * @category | Type Guard Creator
 */
const matchKeyInObject =
	<AnyObject extends { readonly [k in PropertyKey]: unknown }>(
		object: AnyObject
	) =>
	(value: PropertyKey): value is keyof AnyObject =>
		value in object;

export { matchKeyInObject };
