import { guardArrayValues } from './guardArrayValues';
import type { TypeGuardFn } from './types';

/**
 * Given an array of primitives, returns a Type Guard that checks if the given value is like the array.
 *
 * @category Type Guard Creator
 */
const matchArray = <
	A extends readonly (undefined | null | number | string | symbol | boolean)[]
>(
	array: readonly [...A]
) =>
	guardArrayValues(
		(value: unknown, i: number): value is A[number] => value === array[i]
	) as TypeGuardFn<readonly [...A]>;

export { matchArray };
