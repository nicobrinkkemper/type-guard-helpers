/**
 * A Type Guard that checks if the given value is a zero length array
 *
 * @category Type Guard
 */
const isEmptyArray = (value: unknown): value is readonly [] =>
	Array.isArray(value) && value.length === 0;

export { isEmptyArray };