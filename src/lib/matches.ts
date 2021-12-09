import { matchIn } from './matchIn';

/**
 * Given primitives as arguments, returns a Type Guard that checks if the given value is strictly equal to one of the given primitives.
 * @category Type Guard Creator
 */
const matches = <
	Primitives extends readonly (undefined | null | PropertyKey | boolean)[]
>(
	...args: Primitives
) => matchIn(args);

export { matches };
