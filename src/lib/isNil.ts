/**
 * A Type Guard that checks if the given value is equal to null or is of type "undefined"
 *
 * @category Type Guard
 */
const isNil = (value: unknown): value is undefined | null =>
	value === null || typeof value === 'undefined';
export { isNil };
