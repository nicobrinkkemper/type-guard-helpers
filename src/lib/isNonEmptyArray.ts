/**
 * A Type Guard that will check if the given value is an array of non-zero length.
 *
 * @category Type Guard
 */
const isNonEmptyArray = (
	value: unknown
): value is readonly [unknown, ...(readonly unknown[])] =>
	Array.isArray(value) && value.length !== 0;

export { isNonEmptyArray };
