/**
 * Given any argument, returns a Type Guard that checks if the given value is strictly equal to the given argument.
 * @category | Type Guard Creator
 */
const match =
	<Argument>(argument: Argument) =>
	(value: unknown): value is Argument =>
		argument === value;

export { match };
