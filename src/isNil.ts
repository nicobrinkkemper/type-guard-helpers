/**
 * A Type Guard that checks if the given value is equal to null or is of type "undefined"
 *
 * @category Type Guard
 */
const isNil = <Value, Result extends undefined | null>(
	value: Result extends Value ? Value : Result
): value is Result extends Value ? Result : never =>
	value === null || typeof value === 'undefined';
export { isNil };
