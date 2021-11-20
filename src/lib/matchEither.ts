import { matchEitherIn } from './matchEitherIn';

/**
 * Given an array containing primitives, returns a Type Guard that checks if the given value is a index of the given array.
 * @category Type Guard Creator
 */
const matchEither = <
	Primitives extends readonly (undefined | null | PropertyKey | boolean)[]
>(
	...args: Primitives
) => matchEitherIn(args);

export { matchEither };
