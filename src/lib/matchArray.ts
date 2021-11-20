import { guardArrayValues } from './guardArrayValues';

/**
 * Given an array of primitives, returns a Type Guard that checks if the given value is like the array.
 *
 * @category Type Guard Creator
 */
const matchArray = <
	ArraySubject extends readonly (undefined | null | PropertyKey | boolean)[]
>(
	array: ArraySubject
) =>
	guardArrayValues(
		(value: unknown, i: number): value is ArraySubject => value === array[i]
	);

export { matchArray };
