type MatchFn<Type> = <A extends Type>(
	subject: A
) => <Value>(value: Value) => value is A extends Value ? A : never;

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
