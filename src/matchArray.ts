import { guardArrayValues } from './guardArrayValues';
import type { AnyPrimitive, TypeGuardFn } from './types';

/**
 * Given an array of primitives, returns a Type Guard that checks if the given value is like the array.
 *
 * @category Type Guard Creator
 */
const matchArray = <A extends readonly AnyPrimitive[]>(
	array: readonly [...A]
) =>
	guardArrayValues(
		(value: unknown, i: number): value is A[number] => value === array[i]
	) as TypeGuardFn<readonly [...A]>;

export { matchArray };
