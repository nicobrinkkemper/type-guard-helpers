type MatchFn<Primitive = undefined | null | PropertyKey | boolean> = <
	Result extends Primitive
>(
	type: Result
) => <Value, Predicate extends Result extends Value ? Result : never>(
	value: Result extends Value ? Value : Result
) => value is Predicate;

/**
 * Given a primitive, returns a Type Guard that checks if the given value is strictly equal to the given argument.
 * @category Type Guard Creator
 */
const match: MatchFn =
	(argument) =>
	(value): value is never =>
		argument === value;

export type { MatchFn };
export { match };
