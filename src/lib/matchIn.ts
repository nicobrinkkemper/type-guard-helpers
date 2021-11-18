/**
 * Given an array, returns a Type Guard that checks if the given value is a index of the given array.
 * @category Type Guard Creator
 */
const matchIn =
	<AnyArray extends readonly unknown[]>(arr: AnyArray) =>
	<Value, Predicate = AnyArray[number]>(
		value: unknown
	): value is Predicate extends Value ? Predicate : never =>
		arr.indexOf(value) !== -1;

export { matchIn };
