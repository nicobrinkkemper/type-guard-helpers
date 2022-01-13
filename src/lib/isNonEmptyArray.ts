/**
 * A Type Guard that checks if the given value is an array of non-zero length.
 *
 * @category Type Guard
 */
const isNonEmptyArray = <Value>(
	value: Value
): value is Value extends readonly unknown[] ? Value : never =>
	Array.isArray(value) && value.length > 0;

export { isNonEmptyArray };
