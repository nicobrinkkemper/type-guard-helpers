import { guardArray } from '.';

/**
 * Given a array, returns a Type Guard that checks if the given value is like the array.
 *
 * @category Type Guard Creator
 */
const matchArray = <ArraySubject extends readonly unknown[]>(
	array: ArraySubject
) =>
	guardArray(
		(value: unknown, i: number): value is ArraySubject => value === array[i]
	);

export { matchArray };
