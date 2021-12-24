/**
 * Given an array of primitives, returns a Type Guard that checks if the given value is strictly equal to any of the given primitives.
 * @category Type Guard Creator
 */
const matchIn =
	<AnyArray extends readonly unknown[]>(arr: AnyArray) =>
	<
		Value,
		Result extends AnyArray[number],
		Predicate extends Result extends Value ? Result : never
	>(
		value: Result extends Value ? Value : Value
	): value is Predicate =>
		arr.indexOf(value) !== -1;

export { matchIn };
