import { matchIn } from './matchIn';

/**
 * Given an array containing primitives, returns a Type Guard that checks if the given value is a index of the given array.
 * @category Type Guard Creator
 */
const matchArgs = <
	Primitives extends readonly (undefined | null | PropertyKey | boolean)[]
>(
	...args: Primitives
) => matchIn(args);

export { matchArgs };
