/**
 * A Type Guard that checks if the given value is not equal to null and is of type "object"
 *
 * @category Type Guard
 */
const isRecord = (val: unknown): val is Record<PropertyKey, unknown> =>
	val !== null && typeof val === 'object';

export { isRecord };
