/**
 * A Type Guard that will check if the given value is not equal to null and is of type "object"
 *
 * @category Type Guard
 */
const isRecord = (
	val: unknown
): val is { readonly [k in PropertyKey]: unknown } =>
	val !== null && typeof val === 'object';

export { isRecord };
