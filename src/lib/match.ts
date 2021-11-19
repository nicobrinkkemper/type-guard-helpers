type MatchFn<Type> = <A extends Type>(
	type: A
) => <Value, Predicate extends A extends Value ? A : never>(
	value: A extends Value ? Value : A
) => value is Predicate;

/**
 * Given any argument, returns a Type Guard that checks if the given value is strictly equal to the given argument.
 * @category Type Guard Creator
 */
const match: MatchFn<unknown> =
	<Type>(argument: Type) =>
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	(value: unknown): value is any =>
		argument === value;

export type { MatchFn };
export { match };
